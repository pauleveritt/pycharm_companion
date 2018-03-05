.. tip::
    published: 2018-01-02 12:01
    excerpt: Stop "sometimes" with conditional breakpoints.
    images:
        - usage: tweet_movie
          filename: conditional_breakpoints.gif
    full_movie:
        name: v1
        src: https://www.youtube.com/embed/yzC2TwhER0c
        width: 900
    references:
        topic:
            - debugging
            - breakpoints

=======================
Conditional Breakpoints
=======================

Debugging with breakpoints is very useful, but sometimes you have to click
continue many times to get to the item in a loop that you want to break on.
In a repetitive edit-debug-edit cycle, this can get frustrating.

Instead, attach a condition on a breakpoint, making it only stop when the
condition is met. The condition has access to variables in scope at the
breakpoint.

See Also
========

- `PyCharm Help on breakpoints <https://www.jetbrains.com/help/pycharm/configuring-breakpoints.html>`_
