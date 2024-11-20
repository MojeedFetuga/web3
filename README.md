# Co-Working Space Booking System

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Usage Instructions](#usage-instructions)
---

## Introduction

The **Co-Working Space Booking System** is a web-based application that allows users to book desks in a co-working space. The space consists of 15 desks, including 10 individual desks and 5 team desks. The system calculates booking charges based on membership tiers, offers discounts for long bookings, and tracks revenue generated. 

The application visually represents desk availability, preventing double bookings and providing a user-friendly booking process.

---

## Features

1. **Desk Availability Display**:
   - Real-time updates showing available and booked desks.

2. **Membership Tiers**:
   - **Individual Desks**:
     - Basic: $10/hour
     - Premium: $15/hour
     - Executive: $20/hour
   - **Team Desks**:
     - Fixed price: $25/hour

3. **Discounts**:
   - 10% discount for bookings exceeding 3 hours.

4. **Revenue Dashboard**:
   - Displays total revenue and breakdown by membership tier.

5. **Double Booking Prevention**:
   - Booked desks are locked and unavailable for future bookings.

6. **Testing**:
   - Built-in tests to ensure system reliability and correct calculations.

---

## Technologies Used

1. **HTML**: Structure and layout of the application.
2. **CSS**: Styling for visual appeal and responsiveness.
3. **Vanilla JavaScript**: Core functionality, booking logic, and dynamic updates.

---

## Setup Instructions

1. Clone the repository or download the source files.
   ```bash
   git clone https://github.com/your-repo/co-working-space-booking-system.git
   cd co-working-space-booking-system
   ```

2. Open the project directory and locate the `index.html` file.

3. Open `index.html` in your browser (e.g., by double-clicking the file).

---

## Usage Instructions

1. **Viewing Desk Availability**:
   - Desks are visually represented. Available desks are clickable, and booked desks are marked in red.

2. **Booking a Desk**:
   - Select a desk from the dropdown menu.
   - Enter the number of hours for booking.
   - Choose your membership type (Basic, Premium, Executive, or Team).
   - Click **"Book Desk"** to confirm the booking.
   - The total charge will be displayed.

3. **Checking Revenue**:
   - Scroll to the **Revenue Dashboard** section to view total revenue and revenue breakdown by membership tiers.


## Future Enhancements

1. **Authentication**:
   - Add user login and registration for personalized booking experiences.

2. **Booking History**:
   - Track and display previous bookings for each user.

3. **Advanced Dashboard**:
   - Include date filters to view revenue for specific periods.

4. **Responsive Design**:
   - Optimize the system for mobile and tablet devices.

5. **Payment Integration**:
   - Enable online payment options for seamless transactions.

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch and create a pull request.
