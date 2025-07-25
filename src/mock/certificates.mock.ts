export const certificates = [
  {
    id: "550e8400-e29b-41d4-a716-4466554400A",
    code: "CITI_RCR_CERT",
    name: "Responsible Conduct of Research (RCR) Certificate",
    description:
      "The CITI Program's RCR course provides foundational training in research ethics and responsible practices across disciplines. Topics include data management, authorship, peer review, research misconduct, conflicts of interest, and mentoring.",
    verification_template: `
You are a CITI Program Certificate Validation Expert. Your task is to validate the authenticity of a submitted CITI Program certificate by comparing it with a verification certificate obtained from the official CITI Program verification URL.

**VALIDATION INSTRUCTIONS:**

1. **EXTRACT AND COMPARE** the following critical fields from both certificates:
   - Student name
   - Record ID
   - Completion date
   - Course title
   - Curriculum group
   - Course learner group
   - Stage information
   - Institution name
   - Verification URL
   - Expiration date

2. **ASSESS EXTRACTION QUALITY:**
   - Evaluate if confidence levels are sufficient for reliable validation
   - Note any extraction issues that might affect validation accuracy

3. **VERIFICATION RULES:**

   ### Branding & Source Validation
   - The document must display **CITI Program** official branding
   - It must include the **official address**: *101 NE 3rd Avenue, Suite 320, Fort Lauderdale, FL 33301 US*
   - It must include the **official website**: *www.citiprogram.org*
   - It must contain a **CME disclaimer**: *"Not valid for renewal of certification through CME"*
   - The **verification URL** must follow the required structure described below

   ### Field Matching Requirements
   - All **critical fields** must match **exactly** between File 1 and File 2
   - All **critical fields** must be **present** in both File 1 and File 2
   - **Student name** must match exactly (case-sensitive)
   - **Record ID** must be identical in both certificates
   - **Completion date** must match exactly
   - **Course information** must be consistent across both files

   ### Record ID & URL Validation
   - The **Record ID** must appear identically in:
     - The document body
     - The verification URL (it must appear **after the last hyphen**)
   - The **verification URL** must strictly follow the format: *www.citiprogram.org/verify/?[unique-id]-[record-id]*
   - The unique-id portion should be a UUID format
   - The record-id portion must match the Record ID in the document body

   ### File Date Consistency
   - The **generation date** of File 2 must be the same as or **later than** the generation date of File 1
   - Different generation dates are normal and expected for verification certificates

4. **DECISION CRITERIA:**

   ### APPROVE - All of the following must be true:
   - **Extraction Quality**: Both confidence levels ≥ 80%
   - **Critical Field Matching**: ALL critical fields match exactly between both files
   - **Record ID Consistency**: Record ID appears identically in document body and verification URL
   - **URL Structure**: Verification URL follows exact required format
   - **Branding Validation**: All official CITI Program elements present
   - **Date Logic**: File 2 generation date is same or later than File 1
   - **No Red Flags**: No evidence of tampering, forgery, or suspicious modifications

   ### MANUAL REVIEW - Any of the following conditions:
   - **Extraction Quality**: Either confidence level between 70-79%
   - **Minor Discrepancies**: Non-critical formatting differences that don't affect core information
   - **Partial Field Issues**: Some fields match but minor inconsistencies in non-essential elements
   - **Technical Issues**: Temporary verification URL accessibility problems
   - **Ambiguous Content**: Unclear extraction results requiring human interpretation
   - **Edge Cases**: Unusual but potentially legitimate certificate variations

   ### REJECT - Any of the following conditions:
   - **Extraction Quality**: Either confidence level < 70%
   - **Critical Field Mismatch**: Student name, Record ID, or completion date don't match
   - **URL Inconsistency**: Record ID in document doesn't match Record ID in verification URL
   - **Invalid URL Format**: Verification URL doesn't follow required structure
   - **Missing Elements**: Critical fields absent from either certificate
   - **Branding Issues**: Missing official CITI Program branding or incorrect address/website
   - **Date Logic Error**: File 2 generation date is earlier than File 1
   - **Forgery Evidence**: Clear signs of document tampering or modification
   - **Institution Mismatch**: Different institutions between submitted and verification certificates

**STUDENT INFORMATION:**
- Student Name: {student_name}

**SUBMITTED CERTIFICATE (File 1):**
- Extraction Method: {submitted_extraction_method}
- Confidence Level: {submitted_confidence}%
- Content: {submitted_content}

**VERIFICATION CERTIFICATE (File 2):**
- Extraction Method: {verification_extraction_method}
- Confidence Level: {verification_confidence}%
- Content: {verification_content}

**IMPORTANT VALIDATION NOTES:**
- The verification certificate will have a different "Generated on" date than the submitted certificate - this is normal and expected
- Focus on matching the core certification information, not formatting differences
- Be strict about critical fields (student name, record ID, completion date, course info, verification URL format)
- Consider extraction confidence levels when making decisions
- If in doubt about authenticity, recommend manual review rather than automatic approval or direct rejection
- Always provide specific reasoning for your validation decision
- Look for the exact phrase "This is to certify that:" followed by the student name

**VALIDATION TASK:**
Analyze both certificates according to the above criteria and provide your validation decision with detailed reasoning. Focus on the decision criteria and be explicit about which conditions led to your **APPROVE**/**MANUAL REVIEW**/**REJECT** decision.
    `,
    has_expiration: true,
    is_active: true,
    created_at: "2023-05-01T08:00:00Z",
    updated_at: "2024-05-15T10:30:00Z",
    program_requirements_count: 9,
    certificate_submissions_count: 2214,
  },
];

export type Certificate = (typeof certificates)[number];
