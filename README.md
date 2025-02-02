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
=======
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[WebReinvent](https://webreinvent.com/)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Jump24](https://jump24.co.uk)**
- **[Redberry](https://redberry.international/laravel/)**
- **[Active Logic](https://activelogic.com)**
- **[byte5](https://byte5.de)**
- **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
>>>>>>> 501ac15 (Augustine Saah Tamba initial commit)
