# Public-Benefits Application Defect Summary

This public artifact translates the three observed findings into concise QA records. Personal data and identifying source material are intentionally excluded.

[← Back to the full case study](report.md)

## PB-001 — Uploaded evidence appears in multiple evidence rows

**Area:** Document upload and evidence mapping  
**Type:** Data-mapping or presentation defect  
**Public reproduction status:** Exact account-specific steps withheld; behavior was observed during an ordinary application workflow

**Expected result**  
Each evidence row clearly displays the document associated with that record. A document is reused only through an intentional and visible user action.

**Actual result**  
One uploaded document appeared in multiple evidence rows.

**User impact**  
The user may be unable to confirm whether each record has the correct supporting evidence.

**Risk**  
One document could appear to support multiple distinct records, creating ambiguity for both the user and a downstream reviewer.

**Recommended verification**

- Confirm the document shown for every evidence row.
- Replace one attachment and verify that no unrelated row changes.
- Review the final submission summary for one-to-one mapping accuracy.
- Verify intentional document reuse is clearly explained.

## PB-002 — Extracted entity does not match the source document

**Area:** OCR and entity extraction  
**Type:** Data-extraction defect  
**Public reproduction status:** Source document withheld for privacy

**Expected result**  
The extracted name and entity type match the source document, or the system requests confirmation when confidence is insufficient.

**Actual result**  
An individual signer was classified as a different organizational entity.

**User impact**  
The user may not know which extracted value is incorrect or how to correct it.

**Risk**  
Inaccurate entity data may be carried into later review or submission steps.

**Recommended verification**

- Test representative individual and organizational documents using fictional data.
- Compare extracted names and entity types with the source text.
- Verify correction controls are visible and usable.
- Confirm corrected information persists through final review.

## PB-003 — Validation warning conflicts with visible values

**Area:** Cross-field validation  
**Type:** Validation or feedback defect  
**Public reproduction status:** Exact application values withheld for privacy

**Expected result**  
The warning identifies the affected fields, reflects their current values, explains the rule, and clears after a valid correction.

**Actual result**  
The displayed warning did not correspond to the values visible to the user.

**User impact**  
The user cannot confidently determine what must be changed.

**Risk**  
The user may alter correct information, introduce new errors, or be unable to complete the workflow.

**Recommended verification**

- Test values below, at, and above each relevant validation boundary.
- Confirm the warning names the correct fields.
- Correct the values and verify the warning clears.
- Leave and return to the page to verify the correction persists.

## Documentation boundaries

These records describe observable behavior and plausible risk. They do not claim access to internal implementation details or establish the defects’ root causes.

---

[← Back to the full case study](report.md)
