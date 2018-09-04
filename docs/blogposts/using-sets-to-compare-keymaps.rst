.. blogpost::
    published: 2017-05-04 12:00
    excerpt: Put Python's set datastructure to use to produce the PyCharm
            keymap
    wp_url: 2017/05/python-basics-using-sets-to-compare-keymaps/
    references:
        kbbauthor:
            - ernsthaagsman

============================================
Python Basics: Using sets to compare keymaps
============================================

If you’ve ever visited JetBrains at a conference, you know that we always
have handouts with keymaps for our products. You might also know that we have
different keymaps for Windows/Linux and for Mac due to the different keyboard
layouts. As sometimes people grab the wrong one and find out too late, they
can’t use the keymap. Therefore we’ve decided to unify the keymaps into a
single keymap.

This blog post covers:

- Using sets

- Parsing, first pass

- Exploring Results with the Debugger

- Handling special cases

- Set Operations