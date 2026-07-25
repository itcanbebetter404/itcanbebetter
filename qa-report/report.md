# Public-Benefits Application QA Investigation

**Real-world QA case study**

> I documented reliability problems encountered during an ordinary public-benefits application workflow, translated the observed behavior into clear defect statements, and assessed the risk to users and downstream processing.

**Role:** User-observer and independent QA investigator

**Focus:** Exploratory testing, black-box testing, defect documentation, risk assessment, and evidence preservation

**System:** Public-benefits application workflow

**Status:** Public case study prepared from privacy-safe findings

[← Back to Projects](../projects/projects.md)

---

## At a glance

| Area | Summary |
|---|---|
| Problem | Uploaded evidence and extracted information did not always behave consistently with what the user could see. |
| Scope | Document upload, OCR and entity extraction, cross-field validation, evidence mapping, and user-facing feedback |
| Approach | Observe the live workflow, compare visible behavior with expected behavior, isolate distinct issues, assess risk, and document recommendations |
| Findings | Three material defects involving attachment mapping, entity extraction, and validation feedback |
| Public boundary | Personal application data, source documents, account details, and identifying screenshots are not included |

## Context and independence

This case study documents issues observed during an ordinary public-benefits application workflow. It was not commissioned by, affiliated with, or endorsed by the platform or its operating organization. It did not involve penetration testing, security testing, attempts to bypass access controls, or access to another person’s information.

The public version focuses on system behavior and QA reasoning. Private source material and personally identifying information remain outside this repository.

## The problem

A public-benefits application depends on accurate document handling and clear feedback. A user needs to know that the correct evidence was attached to the correct record, that information extracted from a document is accurate, and that any warning corresponds to values the user can inspect and correct.

During the workflow, I observed behavior that called each of those expectations into question:

- one uploaded document appeared to be associated with multiple evidence rows;
- the document-processing system misclassified the identity or organization represented in a document;
- a validation warning did not match the visible values shown to the user.

These were not merely cosmetic inconsistencies. Each issue could affect user confidence, correction decisions, or the reliability of information submitted for review.

## Scope

### In scope

- document upload behavior;
- OCR and entity extraction;
- cross-field validation;
- evidence-to-record mapping;
- visible feedback presented to the user;
- user and processing risks arising from the observed behavior.

### Out of scope

- source-code review;
- internal database inspection;
- performance or load testing;
- security testing;
- administrative processing after submission;
- claims about root cause that could not be observed from the user interface.

Defining these boundaries was important because black-box observations can establish visible behavior and impact, but they cannot prove the internal implementation responsible for a defect.

## Test approach

I treated the experience as a structured black-box investigation:

1. Follow the normal application and document-upload workflow.
2. Compare the visible result with the result a user would reasonably expect.
3. Separate distinct symptoms instead of combining them into one broad complaint.
4. Record the affected area, expected behavior, actual behavior, and potential impact.
5. Avoid claiming an internal cause without implementation evidence.
6. Recommend acceptance criteria that could be checked during a future fix.
7. Remove or withhold personal information from the public case study.

The approach combined exploratory testing, observation, reproduction and isolation where possible, risk-based assessment, and defect documentation.

## Findings

### Finding 1: Evidence attachment mapping

**Observed behavior**

One uploaded document appeared in multiple evidence rows.

**Expected behavior**

Each visible evidence row should clearly identify the document associated with that record. A single upload should not appear to represent multiple distinct records unless the interface explains that relationship.

**Why it matters**

Ambiguous attachment mapping can make a user unsure whether the correct evidence has been submitted. It may also create a risk that one document is interpreted as support for multiple records.

**Recommended acceptance criteria**

- Each evidence row displays the correct associated document.
- Reusing one document across records requires an intentional, visible user action.
- Removing or replacing an attachment affects only the intended record.
- The final review screen accurately represents every document-to-record relationship.

### Finding 2: OCR or entity extraction

**Observed behavior**

The document-processing system classified an individual signer as a different organizational entity.

**Expected behavior**

Extracted names and entity types should match the source document, or the interface should clearly request confirmation when confidence is insufficient.

**Why it matters**

Incorrect entity extraction can introduce inaccurate data into the application and make it difficult for a user to know what must be corrected.

**Recommended acceptance criteria**

- Extracted names match the relevant text in the source document.
- An individual is not silently changed into a different organization or entity.
- Low-confidence extraction is identified for user review.
- The user can correct extracted data before submission.
- Corrections persist through review and submission.

### Finding 3: Cross-field validation feedback

**Observed behavior**

The system displayed a validation warning that did not correspond to the values visible to the user.

**Expected behavior**

A validation message should identify the affected fields, explain the rule being applied, and match the values currently displayed.

**Why it matters**

When a warning contradicts the visible data, the user cannot confidently determine what to change. Repeated guesswork may delay submission or introduce new errors.

**Recommended acceptance criteria**

- The warning is triggered only when the relevant validation rule fails.
- The message identifies the fields involved.
- The message reflects the current visible values.
- Correcting the values clears the warning.
- Returning to the page does not restore a warning after a valid correction.

## Risk assessment

| Risk area | Potential consequence |
|---|---|
| Data accuracy | Extracted or mapped information may not represent the source document correctly. |
| User decision-making | A user may change correct information because the interface suggests that it is wrong. |
| Evidence integrity | A reviewer may receive an unclear relationship between documents and application records. |
| Completion and access | Confusing errors may delay or prevent completion of an important benefits workflow. |
| Trust | Contradictory system feedback can reduce confidence in the application process. |

This assessment describes plausible impact from the observed behavior. It does not claim that every risk occurred in downstream processing.

## Evidence and privacy

The original workflow involved personal documents and application information. Those materials are not published here.

The public evidence package is intentionally limited to:

- privacy-safe descriptions of the observed behavior;
- expected-versus-actual comparisons;
- defect-specific impact analysis;
- recommended acceptance criteria;
- the investigation method and scope boundaries.

No personal documents, account details, application identifiers, correspondence, or identifying screenshots belong in this repository.

## Recommendations

1. Make document-to-record relationships explicit on upload and final review screens.
2. Add user confirmation for uncertain OCR or entity extraction.
3. Preserve user corrections throughout the complete workflow.
4. Rewrite validation messages so they name the affected fields and explain the corrective action.
5. Add regression coverage for upload mapping, OCR correction, cross-field validation, and review-screen accuracy.
6. Test with realistic document variations while protecting sensitive data.

## What I learned

- A user-facing inconsistency can signal a larger data-quality risk.
- Separating symptoms into distinct defects makes investigation and remediation clearer.
- Expected and actual behavior should be stated without guessing at root cause.
- Risk analysis is strongest when it distinguishes observed facts from plausible consequences.
- Privacy requirements affect what evidence can be published, but they do not prevent a clear explanation of method and judgment.
- Acceptance criteria turn a complaint into something a team can verify.

## Skills demonstrated

- Exploratory and black-box testing
- Expected-versus-actual analysis
- Defect decomposition and documentation
- Risk and user-impact assessment
- Acceptance-criteria design
- Evidence and privacy judgment
- Clear communication of technical findings

## Portfolio artifacts

- [Defect Summary](defect-summary.md) — concise expected-versus-actual records for the three findings

---

[← Back to Projects](../projects/projects.md) · [View the Skills Map](../skill-evidence/skills.md)
