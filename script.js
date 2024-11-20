const desks = Array(15).fill(false); // Tracks booking status for 15 desks
const deskPrices = {
  basic: 10,
  premium: 15,
  executive: 20,
  team: 25,
};
let revenue = { basic: 0, premium: 0, executive: 0, team: 0 };
let totalRevenue = 0;

// Populate the desks
const deskContainer = document.getElementById('desk-container');
const deskSelect = document.getElementById('desk');

function renderDesks() {
  deskContainer.innerHTML = '';
  deskSelect.innerHTML = '<option value="">Select Desk</option>';
  desks.forEach((booked, index) => {
    const deskDiv = document.createElement('div');
    deskDiv.className = `desk ${booked ? 'booked' : ''}`;
    deskDiv.innerText = `Desk ${index + 1} (${index < 10 ? 'Individual' : 'Team'})`;
    deskDiv.dataset.index = index;
    deskContainer.appendChild(deskDiv);

    if (!booked) {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `Desk ${index + 1} (${index < 10 ? 'Individual' : 'Team'})`;
      deskSelect.appendChild(option);
    }
  });
}

// Handle booking
document.getElementById('booking-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const deskIndex = parseInt(deskSelect.value);
  const hours = parseInt(document.getElementById('hours').value);
  const membership = document.getElementById('membership').value;

  if (desks[deskIndex]) {
    alert('Desk already booked!');
    return;
  }

  let rate = deskPrices[membership];
  let total = rate * hours;

  if (hours > 3) {
    total *= 0.9; // Apply 10% discount
  }

  desks[deskIndex] = true;
  revenue[membership] += total;
  totalRevenue += total;

  // Update UI
  renderDesks();
  document.getElementById('total-charge').textContent = `Total Charge: $${total.toFixed(2)}`;
  updateDashboard();
});

function updateDashboard() {
  document.getElementById('total-revenue').textContent = totalRevenue.toFixed(2);
  Object.keys(revenue).forEach((key) => {
    document.getElementById(`${key}-revenue`).textContent = revenue[key].toFixed(2);
  });
}

// Initialize
renderDesks();
