/**
 * Minions Risks SDK
 *
 * Risk register, likelihood, impact, and mitigation plans
 *
 * @module @minions-risks/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Risks.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
