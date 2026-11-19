/**
 * Service catalogue. Each entry powers the homepage service list, the services
 * index and its own detail page at /services/:slug.
 */

export const services = [
  {
    slug: 'accounting-bookkeeping',
    index: '01',
    title: 'Accounting & Bookkeeping',
    short:
      'Accurate financial recordkeeping, transaction classification, account reconciliation, and organized accounting records to maintain a clear picture of your business finances.',
    image: { id: '7681091', alt: 'Accounting documents and financial schedules on a desk' },
    headline: 'Reliable Accounting. Clear Financial Records.',
    intro:
      'Well-kept books are the difference between guessing and knowing. We maintain your accounting records to a consistent standard, so every report, filing and management decision rests on figures you can trust.',
    overview: [
      'Our bookkeeping engagement covers the full recording cycle: transactions are captured, classified against your chart of accounts, reconciled to bank and card statements, and reviewed before each reporting period closes.',
      'We work inside the accounting system you already use, or help you establish a structure that suits the size and shape of your business. Documentation is organised as we go, so supporting records are never reconstructed months later.',
    ],
    scope: [
      { title: 'Transaction recording', text: 'Sales, purchases, expenses and adjustments captured and classified consistently.' },
      { title: 'Account reconciliation', text: 'Bank, card and payment-processor accounts reconciled to supporting statements each month.' },
      { title: 'Receivables & payables', text: 'Customer balances and supplier obligations tracked, aged and reported.' },
      { title: 'Documentation & filing', text: 'Supporting documents organised and cross-referenced to ledger entries.' },
      { title: 'Monthly close', text: 'Period-end adjustments, accruals and a review before figures are released.' },
      { title: 'Accounting records organisation', text: 'A clean chart of accounts and a filing structure that stays usable as you grow.' },
    ],
    benefits: [
      'Books that reflect the business as it actually operates',
      'Reporting and filing prepared from reviewed figures',
      'Fewer year-end surprises and last-minute reconstructions',
      'More of your time returned to running the business',
    ],
    clientNeeds: [
      'Access to bank, card and payment-processor statements',
      'Your existing accounting file, or agreement on a new structure',
      'Sales and purchase documentation for the period',
      'A named contact for questions and approvals',
    ],
    faqs: [
      {
        q: 'Can you take over books that are behind?',
        a: 'Yes. We begin with a catch-up review, agree the period to be brought current, and then move into a regular monthly cycle.',
      },
      {
        q: 'Which accounting systems do you work with?',
        a: 'We work in the common cloud accounting platforms and can adapt to a system your business already relies on. The specific tools are agreed during onboarding.',
      },
      {
        q: 'How often will we receive reporting?',
        a: 'The standard cycle is monthly. Quarterly or annual cycles are available for smaller entities with lower transaction volumes.',
      },
    ],
    related: ['financial-reporting', 'tax-consulting'],
  },
  {
    slug: 'financial-management',
    index: '02',
    title: 'Financial Management',
    short:
      'Professional financial planning, cash flow monitoring, expense management, and financial performance analysis to support informed business decisions.',
    image: { id: '8292894', alt: 'Analysis of financial performance figures at a desk' },
    headline: 'A Clear View of Your Cash and Capital.',
    intro:
      'Growth is rarely limited by ambition — it is limited by visibility. We help management teams see cash position, cost structure and performance trends clearly enough to act early rather than react late.',
    overview: [
      'Financial management at Horizon is a recurring advisory service rather than a one-off review. We establish a reporting rhythm, monitor the drivers that matter for your business, and translate what we see into practical recommendations.',
      'The result is a finance function that supports decisions: when to invest, where margin is leaking, and how much room the business genuinely has.',
    ],
    scope: [
      { title: 'Cash flow monitoring', text: 'Rolling forecasts of receipts, payments and closing balances.' },
      { title: 'Budgeting', text: 'Annual budgets and periodic reforecasts built with management.' },
      { title: 'Expense management', text: 'Cost review, supplier spend analysis and control recommendations.' },
      { title: 'Working capital', text: 'Receivables, payables and inventory cycles reviewed for release of cash.' },
      { title: 'Performance analysis', text: 'Margin, contribution and productivity indicators tracked over time.' },
      { title: 'Management reporting', text: 'A concise monthly pack with commentary, variances and actions.' },
    ],
    benefits: [
      'Earlier warning of cash pressure',
      'Decisions supported by forecast rather than instinct',
      'Visibility of where margin is gained or lost',
      'A finance rhythm your leadership team can rely on',
    ],
    clientNeeds: [
      'Up-to-date accounting records',
      'Access to bank balances and payment schedules',
      'Management input on plans and known commitments',
      'A regular review slot with decision-makers',
    ],
    faqs: [
      {
        q: 'Is this a substitute for a full-time finance manager?',
        a: 'It can complement an internal team or provide the finance oversight a smaller business needs before hiring in-house. The appropriate level is agreed during assessment.',
      },
      {
        q: 'How far ahead do you forecast?',
        a: 'Typically thirteen weeks for cash and twelve months for the operating budget, reviewed at each reporting cycle.',
      },
      {
        q: 'Do you provide software?',
        a: 'No. We work with the systems your business already uses and focus on the analysis and advice.',
      },
    ],
    related: ['financial-reporting', 'business-consulting'],
  },
  {
    slug: 'tax-consulting',
    index: '03',
    title: 'Tax Consulting & Compliance',
    short:
      'Professional tax advisory, tax preparation support, tax compliance monitoring, and assistance with applicable tax obligations and regulations.',
    image: { id: '7821914', alt: 'Tax documentation and working papers prepared for review' },
    headline: 'Organised Records. Confident Filings.',
    intro:
      'Tax obligations reward preparation. We keep the supporting records in order, track the deadlines that apply to your business, and make sure the information behind each filing is complete and consistent.',
    overview: [
      'Our tax work begins with the records. Where bookkeeping and reporting are already maintained to standard, filing preparation becomes a review rather than a reconstruction — faster, cheaper, and far less exposed to error.',
      'We monitor the obligations that apply to your entity and keep a compliance calendar so nothing is discovered late. Where a matter requires a licensed specialist or a legal opinion, we say so and coordinate with your existing advisers.',
    ],
    scope: [
      { title: 'Tax position review', text: 'A structured review of the records behind your reported position.' },
      { title: 'Filing preparation support', text: 'Working papers, schedules and reconciliations prepared for filing.' },
      { title: 'Compliance calendar', text: 'Applicable deadlines tracked and flagged ahead of time.' },
      { title: 'Documentation readiness', text: 'Supporting evidence organised and retained for review.' },
      { title: 'Adviser coordination', text: 'Working alongside your legal or tax counsel where required.' },
      { title: 'Regulatory monitoring', text: 'Changes in applicable obligations brought to your attention.' },
    ],
    benefits: [
      'Filings supported by complete, reconciled records',
      'Deadlines tracked rather than remembered',
      'Fewer corrections and resubmissions',
      'A documented trail for every reported position',
    ],
    clientNeeds: [
      'Complete accounting records for the period',
      'Prior filings and correspondence',
      'Details of registrations and applicable obligations',
      'Advance notice of unusual transactions',
    ],
    faqs: [
      {
        q: 'Do you provide formal tax opinions?',
        a: 'No. We provide record preparation, compliance monitoring and advisory support. Formal opinions and representation are provided by appropriately licensed advisers, with whom we coordinate.',
      },
      {
        q: 'Can you work with our existing tax adviser?',
        a: 'Yes — this is common. We prepare and organise the underlying records so your adviser can work from clean information.',
      },
      {
        q: 'What if we are already behind on a filing?',
        a: 'Tell us as early as possible. We assess the position, prioritise the outstanding items, and set out the sequence for bringing records current.',
      },
    ],
    related: ['accounting-bookkeeping', 'payroll-services'],
  },
  {
    slug: 'payroll-services',
    index: '04',
    title: 'Payroll & Employee Financial Administration',
    short:
      'Structured payroll calculations, employee payment records, salary administration, and related financial documentation.',
    image: { id: '7658352', alt: 'Payroll schedules and financial statements reviewed at a desk' },
    headline: 'Payroll Handled With Precision.',
    intro:
      'Payroll is the most visible financial process in any business: it runs on a fixed date, it affects every employee, and errors are remembered. We administer it as a controlled, documented cycle.',
    overview: [
      'We maintain the payroll register, calculate gross-to-net amounts, and prepare the schedules your finance team needs to approve and release payments. Each cycle is checked against the previous one so changes are explained rather than assumed.',
      'Employee records and payroll documentation are kept organised and consistent, which keeps reporting, reconciliations and year-end summaries straightforward.',
    ],
    scope: [
      { title: 'Payroll calculation', text: 'Gross-to-net calculations prepared for each pay cycle.' },
      { title: 'Payment schedules', text: 'Approval-ready schedules and records for each run.' },
      { title: 'Deductions & statutory items', text: 'Applicable deductions calculated and documented per cycle.' },
      { title: 'Employee records', text: 'Structured, confidential records maintained for each employee.' },
      { title: 'Payroll reporting', text: 'Period summaries reconciled to the general ledger.' },
      { title: 'Year-end summaries', text: 'Consolidated annual payroll documentation prepared for filing.' },
    ],
    benefits: [
      'A predictable, documented payroll cycle',
      'Payroll reconciled to the accounting records',
      'Confidential handling of employee information',
      'Clean year-end payroll documentation',
    ],
    clientNeeds: [
      'Employee contracts and pay arrangements',
      'Joiners, leavers and change notifications each cycle',
      'Approval authority and payment release process',
      'Applicable statutory registrations',
    ],
    faqs: [
      {
        q: 'Can you run payroll alongside our HR team?',
        a: 'Yes. HR typically owns contracts and employee changes; we own calculation, records and reconciliation.',
      },
      {
        q: 'How are approvals handled?',
        a: 'Each cycle is delivered as an approval-ready schedule. Payments are released by your authorised signatories, not by us.',
      },
      {
        q: 'How is employee data protected?',
        a: 'Payroll data is held in restricted, access-controlled systems and shared only through agreed, secure channels.',
      },
    ],
    related: ['accounting-bookkeeping', 'tax-consulting'],
  },
  {
    slug: 'financial-reporting',
    index: '05',
    title: 'Financial Reporting & Analysis',
    short:
      'Preparation and interpretation of financial statements, management reports, performance indicators, and financial analysis for better business visibility.',
    image: { id: '7868970', alt: 'Financial statements and performance schedules prepared for management' },
    headline: 'Numbers That Support Decisions.',
    intro:
      'A report is only useful if it changes what someone does next. We prepare financial statements and management reports that are accurate, readable, and framed around the questions leadership is actually asking.',
    overview: [
      'We prepare periodic management accounts and, where required, annual financial statements in a consistent format — so periods are comparable and trends are visible rather than buried.',
      'Each pack is accompanied by commentary: what moved, why it moved, and what it means for the months ahead. Indicators are chosen for your business model rather than copied from a template.',
    ],
    scope: [
      { title: 'Management accounts', text: 'Monthly or quarterly accounts with variance commentary.' },
      { title: 'Financial statements', text: 'Statement preparation supported by reconciled records and schedules.' },
      { title: 'Performance indicators', text: 'A small set of measures that reflect how your business earns.' },
      { title: 'Budget comparison', text: 'Actual versus budget analysis with explanations of material differences.' },
      { title: 'Margin & cash analysis', text: 'Contribution, gross margin and cash conversion reviewed over time.' },
      { title: 'Board reporting packs', text: 'Concise, decision-oriented packs for directors and investors.' },
    ],
    benefits: [
      'Comparable figures across periods',
      'Commentary that explains, not just presents',
      'A consistent pack format leadership can rely on',
      'Reporting prepared from reconciled records',
    ],
    clientNeeds: [
      'Closed accounting records for the period',
      'Budget or forecast to compare against',
      'Known one-off items for commentary',
      'Reporting deadlines and audience',
    ],
    faqs: [
      {
        q: 'Can reporting follow our own format?',
        a: 'Yes. We establish a format during onboarding and keep it stable so periods remain comparable.',
      },
      {
        q: 'Do you prepare audited statements?',
        a: 'No. We prepare statements and supporting schedules. Statutory audit opinions are issued by licensed audit firms, and we support the process with organised records.',
      },
      {
        q: 'How quickly after month end are reports available?',
        a: 'Typically within ten to fifteen working days of receiving complete records — agreed in the engagement scope.',
      },
    ],
    related: ['financial-management', 'accounting-bookkeeping'],
  },
  {
    slug: 'business-consulting',
    index: '06',
    title: 'Business & Financial Consulting',
    short:
      'Practical financial guidance, cost analysis, budgeting, business planning, and financial strategies designed to improve operational efficiency.',
    image: { id: '5668495', alt: 'Leadership team reviewing business plans in a meeting room' },
    headline: 'Financial Guidance for the Decisions Ahead.',
    intro:
      'Some decisions are too consequential to make from a bank balance alone. We work with owners and management teams on the financial questions behind pricing, cost, investment and growth.',
    overview: [
      'Consulting engagements are scoped around a specific decision or objective: a pricing review, a cost restructuring, a funding application, or a plan for the next financial year.',
      'We build the analysis from your actual records, present the options plainly, and stay involved through implementation so the recommendation becomes an operating reality rather than a document.',
    ],
    scope: [
      { title: 'Business planning', text: 'Structured plans with financial projections and stated assumptions.' },
      { title: 'Cost analysis', text: 'Cost base reviewed by activity, supplier and product line.' },
      { title: 'Pricing & margin review', text: 'Contribution analysis to test pricing against real cost.' },
      { title: 'Budget development', text: 'Budgets built with operational owners, not imposed on them.' },
      { title: 'Funding readiness', text: 'Financial information prepared for lenders or investors.' },
      { title: 'Efficiency review', text: 'Process and reporting improvements that reduce administrative drag.' },
    ],
    benefits: [
      'Recommendations grounded in your own figures',
      'Options presented with their financial consequences',
      'Assumptions documented and testable',
      'Support through implementation',
    ],
    clientNeeds: [
      'Access to current and historical financial records',
      'Management availability for working sessions',
      'Clarity on the decision or objective',
      'Agreement on the measures of success',
    ],
    faqs: [
      {
        q: 'How is a consulting engagement priced?',
        a: 'By agreed scope and deliverables, set out in writing before work begins. Recurring advisory is priced as a monthly retainer.',
      },
      {
        q: 'Do you work with startups?',
        a: 'Yes. Early-stage businesses typically need a financial model, a reporting rhythm and a clean record structure — all of which we provide.',
      },
      {
        q: 'Can consulting be combined with bookkeeping?',
        a: 'Frequently. Clean records make better analysis, and the two engagements reinforce each other.',
      },
    ],
    related: ['financial-management', 'financial-reporting'],
  },
]

export const getService = (slug) => services.find((service) => service.slug === slug)
