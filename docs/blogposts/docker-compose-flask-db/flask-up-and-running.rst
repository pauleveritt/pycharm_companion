.. blogpost::
    published: 2017-03-29 12:00
    excerpt: Part 1 in a series about Docker Compose, showing Docker setup,
        Dockerizing Flask, and hooking up to PyCharm Professional
    is_pro: True
    wp_url: 2017/03/docker-compose-getting-flask-up-and-running/
    references:
        technology:
            - docker
            - flask
        topic:
            - remote_interpreter
        author:
            - ernsthaagsman

============================================
Docker-Compose: Getting Flask up and running
============================================

A couple of issues were resolved in PyCharm 2017.1, and Docker for Mac should
now work out of the box. In this blog post we’ll show you how to set up a
project with Docker Compose on a Mac. If you’re on Linux, the process is very
similar. Docker Compose is supported on Windows from PyCharm 2017.2.

This blog post covers:

- First things first (prep)

- Dockerizing Flask

- A trap for young players! (port number)

- Configuring PyCharm
