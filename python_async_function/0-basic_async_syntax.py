#!/usr/bin/env python3
"""Module that contains function - asynchronous
coroutine that waits for a random delay between 0
and max_delay seconds and returns it."""
from random import uniform
from asyncio import sleep


async def wait_random(max_delay: int = 10) -> float:
    """
    asynchronous coroutine that waits for
    a random delay between 0 and max_delay
    seconds and returns it.
    """
    delay_time = uniform(0, max_delay)
    await sleep(delay_time)
    return delay_time
