"""
Minions Risks SDK — Type Schemas
Custom MinionType schemas for Minions Risks.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

risk_type = MinionType(
    id="risks-risk",
    name="Risk",
    slug="risk",
    description="An identified project risk.",
    icon="⚠️",
    schema=[
        FieldDefinition(name="projectId", type="string", label="projectId"),
        FieldDefinition(name="title", type="string", label="title"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="likelihood", type="select", label="likelihood"),
        FieldDefinition(name="impact", type="select", label="impact"),
        FieldDefinition(name="riskScore", type="number", label="riskScore"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="mitigationPlan", type="string", label="mitigationPlan"),
        FieldDefinition(name="ownerId", type="string", label="ownerId"),
        FieldDefinition(name="identifiedAt", type="string", label="identifiedAt"),
        FieldDefinition(name="resolvedAt", type="string", label="resolvedAt"),
    ],
)

risk_update_type = MinionType(
    id="risks-risk-update",
    name="Risk update",
    slug="risk-update",
    description="A status update on a tracked risk.",
    icon="📝",
    schema=[
        FieldDefinition(name="riskId", type="string", label="riskId"),
        FieldDefinition(name="updatedAt", type="string", label="updatedAt"),
        FieldDefinition(name="newLikelihood", type="select", label="newLikelihood"),
        FieldDefinition(name="newImpact", type="select", label="newImpact"),
        FieldDefinition(name="notes", type="string", label="notes"),
        FieldDefinition(name="updatedBy", type="string", label="updatedBy"),
    ],
)

custom_types: list[MinionType] = [
    risk_type,
    risk_update_type,
]

