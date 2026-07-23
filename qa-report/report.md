# QA Report

## Overview
During the completion of a real-world public-benefits application workflow, I identified several defects affecting document upload, OCR extraction, cross-field validation, and evidence mapping. The work was approached as a structured QA investigation focused on reproducibility, user impact, and clear documentation.

## Scope
The review focused on the following areas:
- document upload behavior
- OCR and entity extraction
- cross-field validation logic
- evidence attachment mapping
- overall workflow reliability

## Test Approach
The investigation used a combination of:
- exploratory testing
- black-box testing
- reproduction and isolation of issues
- risk-based severity assessment
- evidence preservation and documentation

## Key Findings
The report documented several issues that affected the reliability of the submission workflow.

### 1. Attachment Mapping Defect
One uploaded document appeared in multiple evidence rows, creating a risk that a single submission could be interpreted as multiple distinct records.

### 2. Entity Extraction Defect
The document-processing system misclassified an individual signer as a different organizational entity, which raised concerns about data accuracy.

### 3. Cross-Field Validation Defect
The system generated a validation warning that did not match the visible values shown to the user, creating confusion and potential risk of incorrect processing.

## Evidence and Documentation
Supporting evidence was preserved through screenshots, notes, and structured defect records. The documentation included:
- prerequisites
- reproduction steps
- expected versus actual behavior
- severity and impact
- workarounds
- acceptance criteria

## Recommendations
The following actions would improve reliability and reduce future risk:
- strengthen validation logic
- improve attachment-to-record mapping
- expand regression testing for upload and OCR workflows
- add clearer user-facing feedback during submission

## Conclusion
The findings demonstrate a practical QA workflow that combines defect detection, risk assessment, and clear communication of user impact. This format is suitable for a public portfolio because it highlights professional judgment and technical thinking without relying on sensitive personal details.
