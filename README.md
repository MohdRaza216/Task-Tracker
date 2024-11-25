# Task Tracker App

Task Tracker is a simple React-based application for managing tasks. It allows users to add, delete, and toggle reminders for tasks. It uses a mock backend powered by JSON Server for data storage and retrieval.

## Features

- Add new tasks with a reminder option.
- Delete existing tasks.
- Toggle task reminders with a double-click.
- Navigate to an About page.

## Tech Stack

- **Frontend**: React.js
- **Mock Backend**: JSON Server
- **Styling**: CSS

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MohdRaza216/Task-Tracker.git
   cd Task-Tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

4. Start the JSON Server (on port 5000):
   ```bash
   npm run server
   ```

## Usage

1. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

2. Use the UI to:
   - Add tasks using the "Add" button.
   - View the list of tasks.
   - Double-click on a task to toggle its reminder.
   - Delete tasks using the delete icon.

## File Structure

```
src/
├── components/
│   ├── Header.js
│   ├── Tasks.js
│   ├── Task.js
│   ├── AddTask.js
│   └── Footer.js
├── App.js
├── index.js
└── db.json
```

- **`components/`**: Contains reusable React components.
- **`db.json`**: The mock database for tasks.

## Dependencies

- React Router: For navigation
- JSON Server: For mock backend
- React Icons: For icons like the delete button

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork the repository, make improvements, and submit pull requests. Contributions are welcome!
```
