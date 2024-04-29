#!/usr/bin/python3
"""
Module that contains type-annotated function
that calculates the length of the elements of the list
"""
from typing import Iterable, List, Tuple, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    return [(i, len(i)) for i in lst]
