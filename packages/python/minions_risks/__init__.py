"""
Minions Risks Python SDK

Risk register, likelihood, impact, and mitigation plans
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Risks.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
