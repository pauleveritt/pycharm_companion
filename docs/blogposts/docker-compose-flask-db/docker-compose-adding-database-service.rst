.. blogpost::
    published: 2017-04-13 12:00
    excerpt: Part 2 in a series about Docker Compose, showing adding a
        database to your application and container
    is_pro: True
    wp_url: 2017/04/docker-compose-adding-a-database-service/
    references:
        technology:
            - docker
            - postgresql
        topic:
            - remote_interpreter
        author:
            - ernsthaagsman

=========================================
Docker-Compose: Adding a Database Service
=========================================

This tutorial continues where the previous Docker-Compose tutorial left off.
If you haven’t read it yet, read about getting Docker-Compose and Flask
running in PyCharm first. Like the first tutorial, this one was made on macOS,
and although Linux should be similar there may be small differences. For
details on using Docker Compose on Windows, see our blog post on using Compose
on Windows.

This blog post covers:

- Adding the Database

- Setting Up the Database

- Writing the Application

