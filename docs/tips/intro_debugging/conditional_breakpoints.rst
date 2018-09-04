.. tip::
    published: 2018-01-02 12:01
    excerpt: Stop "sometimes" with conditional breakpoints.
    twitter_dates:
        - tweet_id: 929064877154623490
          date: 2017-11-10
        - tweet_id: 855442383202287616
          date: 2017-04-21
    images:
        - usage: tweet_movie
          filename: conditional_breakpoints.gif
    full_movie:
        name: v1
        src: https://www.youtube.com/embed/yzC2TwhER0c
        width: 900
    references:
        kbbtopic:
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

- `PyCharm Help on conditional breakpoints <https://www.jetbrains.com/help/pycharm/configuring-breakpoints.html>`_
