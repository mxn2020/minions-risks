/**
 * @module @minions-risks/sdk/schemas
 * Custom MinionType schemas for Minions Risks.
 */

import type { MinionType } from 'minions-sdk';

export const riskType: MinionType = {
  id: 'risks-risk',
  name: 'Risk',
  slug: 'risk',
  description: 'An identified project risk.',
  icon: '⚠️',
  schema: [
    { name: 'projectId', type: 'string', label: 'projectId' },
    { name: 'title', type: 'string', label: 'title' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'likelihood', type: 'select', label: 'likelihood' },
    { name: 'impact', type: 'select', label: 'impact' },
    { name: 'riskScore', type: 'number', label: 'riskScore' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'mitigationPlan', type: 'string', label: 'mitigationPlan' },
    { name: 'ownerId', type: 'string', label: 'ownerId' },
    { name: 'identifiedAt', type: 'string', label: 'identifiedAt' },
    { name: 'resolvedAt', type: 'string', label: 'resolvedAt' },
  ],
};

export const riskupdateType: MinionType = {
  id: 'risks-risk-update',
  name: 'Risk update',
  slug: 'risk-update',
  description: 'A status update on a tracked risk.',
  icon: '📝',
  schema: [
    { name: 'riskId', type: 'string', label: 'riskId' },
    { name: 'updatedAt', type: 'string', label: 'updatedAt' },
    { name: 'newLikelihood', type: 'select', label: 'newLikelihood' },
    { name: 'newImpact', type: 'select', label: 'newImpact' },
    { name: 'notes', type: 'string', label: 'notes' },
    { name: 'updatedBy', type: 'string', label: 'updatedBy' },
  ],
};

export const customTypes: MinionType[] = [
  riskType,
  riskupdateType,
];

