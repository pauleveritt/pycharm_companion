.. blogpost::
    published: 2017-12-11 12:00
    excerpt: Start a Flask project in a Vagrant VM provisioned by Ansible
    is_pro: True
    wp_url: 2017/12/developing-in-a-vm-with-vagrant-and-ansible/
    references:
        technology:
            - vagrant
            - ansible
            - flask
            - virtualenv
        topic:
            - debugging
            - breakpoints
        author:
            - ernsthaagsman

===========================================
Developing in a VM with Vagrant and Ansible
===========================================

In this first step of the blog post series, we get a simple Flask server
running. But we run it inside a local Vagrant VM. Which we provision
using Ansible.

Along the way we use PyCharm Professional facilities, both to use the
VM as a remote interpreter, but also let PyCharm run the VM.
