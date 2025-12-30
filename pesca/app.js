// Initialize Map
const map = L.map('map', {
    zoomControl: false, // We'll add it in a custom position or style if needed, or leave default top-left
    attributionControl: false
}).setView([40.4168, -3.7038], 6); // Center on Madrid/Spain

L.control.zoom({
    position: 'bottomright'
}).addTo(map);

// Add Dark Mode Tile Layer (CartoDB Dark Matter)
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    subdomains: 'abcd'
}).addTo(map);

// State
let currentLocationId = null;
let allCatches = JSON.parse(localStorage.getItem('pesca_espana_capturas')) || [...initialCatches];

// DOM Elements
const provinceSelect = document.getElementById('province-select');
const locationList = document.getElementById('location-list');
const detailsPanel = document.getElementById('details-panel');
const mapContainer = document.getElementById('map-container');
const modalOverlay = document.getElementById('modal-overlay');
const btnAddCatch = document.getElementById('btn-add-catch');
const closeDetailsBtn = document.getElementById('close-details');
const closeModalBtn = document.getElementById('close-modal');
const catchForm = document.getElementById('catch-form');
const locationSelect = document.getElementById('catch-location');

// Markers Layer Group
let markersLayer = L.layerGroup().addTo(map);

// Icons
const fishingIcon = L.divIcon({
    className: 'custom-div-icon',
    html: "<div style='background-color: #00d4ff; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 10px #00d4ff;'></div>",
    iconSize: [12, 12],
    iconAnchor: [6, 6]
});

// --- Initialization ---
function init() {
    populateProvinces();
    populateLocationSelect();
    renderLocations(); // Show all initially
}

// --- Populating Data ---
function populateProvinces() {
    // Extract unique provinces from our data just in case, or use the manual list
    // Let's use the manual list + any from data
    const uniqueProvinces = [...new Set([...provinces, ...fishingLocations.map(l => l.province)])].sort();

    uniqueProvinces.forEach(prov => {
        const option = document.createElement('option');
        option.value = prov;
        option.textContent = prov;
        provinceSelect.appendChild(option);
    });
}

function populateLocationSelect() {
    // Populate the select in the modal
    locationSelect.innerHTML = '<option value="">Selecciona un lugar...</option>';
    fishingLocations.sort((a, b) => a.name.localeCompare(b.name)).forEach(loc => {
        const option = document.createElement('option');
        option.value = loc.id;
        option.textContent = loc.name;
        locationSelect.appendChild(option);
    });
}

// --- Rendering ---
function renderLocations(filterProvince = null) {
    // Clear list and markers
    locationList.innerHTML = '';
    markersLayer.clearLayers();

    const filteredLocations = filterProvince
        ? fishingLocations.filter(l => l.province === filterProvince)
        : fishingLocations;

    if (filteredLocations.length === 0) {
        locationList.innerHTML = '<div class="empty-state"><p>No hay lugares registrados en esta provincia.</p></div>';
        return;
    }

    filteredLocations.forEach(loc => {
        // 1. Add to Sidebar List
        const item = document.createElement('div');
        item.className = 'location-item';
        item.innerHTML = `
            <h4>${loc.name}</h4>
            <p><i class="fa-solid fa-location-dot"></i> ${loc.province} • ${loc.type}</p>
        `;
        item.onclick = () => selectLocation(loc.id);
        locationList.appendChild(item);

        // 2. Add Marker to Map
        const marker = L.marker([loc.lat, loc.lng], { icon: fishingIcon });
        marker.bindTooltip(loc.name, {
            permanent: false,
            direction: 'top',
            className: 'glass-tooltip' // You would style this class if needed
        });
        marker.on('click', () => selectLocation(loc.id));
        markersLayer.addLayer(marker);
    });

    // Fit bounds if filtering
    if (filterProvince && filteredLocations.length > 0) {
        const group = new L.featureGroup(markersLayer.getLayers());
        map.fitBounds(group.getBounds().pad(0.1));
    } else if (!filterProvince) {
        map.setView([40.4168, -3.7038], 6);
    }
}

// --- Interaction ---
function selectLocation(id) {
    currentLocationId = id;
    const loc = fishingLocations.find(l => l.id === id);
    if (!loc) return;

    // Highlight sidebar item
    document.querySelectorAll('.location-item').forEach(el => el.classList.remove('active'));
    // Finding the specific DOM node is tricky without IDs on items, but simple enough for this demo
    // Alternatively, we could re-render, but let's just accept the list might be long.
    // Let's scroll to the map
    map.flyTo([loc.lat, loc.lng], 10, {
        animate: true,
        duration: 1.5
    });

    showDetails(loc);
}

function showDetails(loc) {
    // Populate details
    document.getElementById('detail-title').textContent = loc.name;
    document.getElementById('detail-type').textContent = loc.type;

    // Species
    const speciesContainer = document.getElementById('species-list');
    speciesContainer.innerHTML = '';
    loc.species.forEach(sp => {
        const tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = sp;
        speciesContainer.appendChild(tag);
    });

    // Catches
    renderCatchesList(loc.id);

    // Show panel
    detailsPanel.classList.remove('hidden');
}

function renderCatchesList(locationId) {
    const catchesList = document.getElementById('catches-list');
    catchesList.innerHTML = '';

    const locCatches = allCatches.filter(c => c.locationId == locationId); // loose comparison for string/int

    if (locCatches.length === 0) {
        catchesList.innerHTML = '<p style="color:var(--text-muted); font-size:0.9rem;">No hay capturas registradas aún.</p>';
        return;
    }

    locCatches.forEach(c => {
        const card = document.createElement('div');
        card.className = 'catch-card';
        card.innerHTML = `
            <div class="catch-top">
                <span>${c.date}</span>
                <span>${c.modality}</span>
            </div>
            <div class="catch-main">
                <i class="fa-solid fa-fish"></i> ${c.species}
            </div>
            <div class="catch-details">
                ${c.size ? `Tamaño: ${c.size}<br>` : ''}
                ${c.lure ? `Señuelo: ${c.lure}` : ''}
            </div>
        `;
        catchesList.appendChild(card);
    });
}

// --- Event Listeners ---

// Filter by Province
provinceSelect.addEventListener('change', (e) => {
    const val = e.target.value;
    renderLocations(val === "" ? null : val);
    detailsPanel.classList.add('hidden'); // Hide details when filter changes
});

// Modal Logic
btnAddCatch.addEventListener('click', () => {
    // Reset form
    catchForm.reset();
    // Pre-select location if one is currently viewed
    if (currentLocationId) {
        locationSelect.value = currentLocationId;
    }
    // Set date to today
    document.getElementById('catch-date').valueAsDate = new Date();

    modalOverlay.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
});

closeDetailsBtn.addEventListener('click', () => {
    detailsPanel.classList.add('hidden');
    // Zoom out map slightly? Optional.
    map.setView([40.4168, -3.7038], 6);
});

// Close modal on outside click
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.add('hidden');
    }
});

// Handle Form Submit
catchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newCatch = {
        id: Date.now(),
        locationId: parseInt(document.getElementById('catch-location').value),
        date: document.getElementById('catch-date').value,
        species: document.getElementById('catch-species').value,
        size: document.getElementById('catch-size').value,
        lure: document.getElementById('catch-lure').value,
        modality: document.getElementById('catch-modality').value
    };

    allCatches.push(newCatch);
    localStorage.setItem('pesca_espana_capturas', JSON.stringify(allCatches));

    // Refresh UI if we are looking at that location
    if (currentLocationId == newCatch.locationId) {
        renderCatchesList(currentLocationId);
    }

    modalOverlay.classList.add('hidden');
    alert('¡Captura registrada con éxito!');
});

// Start
init();
