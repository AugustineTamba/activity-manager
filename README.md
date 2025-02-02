# Activity Manager

The Activity Manager is a single-page web application built with Laravel and Bootstrap. It allows users to manage activities by adding, editing, and deleting them. The application uses AJAX for seamless interactions and real-time updates.

## Features

- **Add Activity**: Add a new activity with a name and description.
- **Edit Activity**: Edit an existing activity's name and description.
- **Delete Activity**: Delete an activity with a confirmation modal.
- **Sortable Activity**: Sort the activity by clicking on the sortable icon at the top of the list.
- **Real-Time Updates**: The activities table updates in real-time without page refresh.
- **Validation**: Ensures activity names are unique and required fields are filled out.

## Technologies Used

- **Backend**: Laravel (PHP framework)
- **Frontend**: Bootstrap, jQuery
- **Database**: MySQL (or any database supported by Laravel)
- **AJAX**: For asynchronous requests
- **CSRF Protection**: Laravel's built-in CSRF protection

## Getting Started

### Prerequisites

- **Composer**: Make sure you have composer installed on your machine.
- **PHP**: Make sure you have PHP installed.
- **MySQL** >= 5.7 or MariaDB >= 10.3
- **Web server**: (Apache/Nginx)

## Installation

1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/AugustineTamba/activity-manager.git
   cd activity-manager

2. **Install dependencies**:

    ```bash
    composer install
    ```
    
** If Necessary - NC **

  ```bash
  npm install
  ```

** Generate application key: If Necessary**

  ```bash
  php artisan key:generate
  ```

3.  **Set up the database**:

  - Create a MySQL database.
  - Update the .env file with your database credentials:

    ```bash 
    DB_DATABASE=your_database_name
    DB_USERNAME=your_database_user
    DB_PASSWORD=your_database_password

** OR Configure your database in `.env`: **

  ```env
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=activity_manager
  DB_USERNAME=your_username
  DB_PASSWORD=your_password
  ```

4. **Run migrations**:

    ```bash
    php artisan migrate

5. **Serve the application**:

    ```bash
    php artisan serve

6. **Access the application**:
- Open your browser and go to http://localhost:8000.

7. **Usage**

- Add Activity: Click the "Add Activity" button, fill out the form, and click "Save".
- Edit Activity: Click the edit button on an activity, modify the details, and click "Save".
- Delete Activity: Click the delete button on an activity and confirm the deletion.
- Sort activities by clicking on column headers
- Confirm actions through modal dialogs

## Command Line Tools

### Create Activity
Create a new activity using the command line:
```bash
php artisan activity:add "Activity Name" "Activity Description"
```

### Delete Activity
Delete an activity by ID:
```bash
php artisan activity:delete {id}
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is open-source and available under the MIT [LICENSE](LICENSE).

### SCREENSHOTS

<img src="https://github.com/user-attachments/assets/129a0eda-617c-4e8e-ae85-85d85a66a1bc" width="300">
<img src="https://github.com/user-attachments/assets/a9d0e70b-360c-4b2e-9f5c-6fec4ff2f523" width="300">
<img src="https://github.com/user-attachments/assets/2bbe0867-18c9-42ce-a7ab-3eec20179526" width="300">
<img src="https://github.com/user-attachments/assets/4f5987d3-d5d8-4e0f-aca9-ff50d86bc5b0" width="300">

## Project Structure

```
activity-manager/
├── app/
│   ├── Console/
│   │   └── Commands/
│   │       ├── CreateActivity.php
│   │       └── DeleteActivity.php
│   ├── Http/
│   │   └── Controllers/
│   │       └── ActivityController.php
│   └── Models/
│       └── Activity.php
├── public/
│   └── js/
│       └── app.js
├── resources/
│   └── views/
│       └── activities/
│           └── index.blade.php
└── routes/
    └── web.php
```
