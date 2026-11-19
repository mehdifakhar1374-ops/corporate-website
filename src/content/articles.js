/**
 * Insights articles. Add a new object here and it appears automatically on
 * /insights, in the homepage selection and at /insights/:slug.
 *
 * Block types: { type: 'p' | 'h2' | 'list' | 'quote', text, items }
 */

export const categories = ['All', 'Accounting', 'Cash Flow', 'Compliance', 'Planning', 'Reporting']

export const articles = [
  {
    slug: 'why-accurate-bookkeeping-matters',
    title: 'Why Accurate Bookkeeping Matters for Business Growth',
    category: 'Accounting',
    date: '2026-10-28',
    readTime: '5 min read',
    author: 'Horizon Financial Services',
    image: { id: '7681091', alt: 'Accounting documents and schedules reviewed on a desk' },
    excerpt:
      'Bookkeeping is usually treated as administration. In practice it is the input to every decision a business makes about price, cost and capital.',
    blocks: [
      {
        type: 'p',
        text: 'Most businesses do not set out to keep poor records. Records degrade gradually: a transaction is posted to the nearest plausible account, a reconciliation is skipped in a busy month, a supplier invoice is filed somewhere sensible at the time and never seen again. Individually these are small. Together they turn your financial statements into an estimate.',
      },
      {
        type: 'p',
        text: 'The cost is not the bookkeeping fee. The cost is the decisions made on top of uncertain numbers — a price set without knowing true contribution, a hire approved without seeing the cash impact, a lender asked for information the business cannot quickly produce.',
      },
      { type: 'h2', text: 'What accuracy actually buys you' },
      {
        type: 'list',
        items: [
          'Comparability: this month means the same thing as last month, so trends are real rather than artefacts of inconsistent classification.',
          'Speed: reporting, filings and lender requests are prepared from records that already exist.',
          'Confidence: a margin figure you can defend in a meeting, with the supporting schedule one click away.',
        ],
      },
      {
        type: 'p',
        text: 'There is also a defensive argument. Disputes — with a customer, a supplier, or a revenue authority — are settled on documentation. A business that can produce a clean trail quickly spends less time and less money resolving them.',
      },
      { type: 'h2', text: 'Where to start' },
      {
        type: 'p',
        text: 'Begin with the chart of accounts. If the categories do not match how the business actually earns and spends, no amount of diligent posting will produce useful reporting. Then insist on monthly reconciliation of bank, card and payment-processor accounts, and close each period before the next one begins.',
      },
      {
        type: 'p',
        text: 'None of this requires complexity. It requires a consistent standard, applied every month, by someone who is accountable for it.',
      },
      {
        type: 'p',
        text: 'This article is general information, not professional advice. Circumstances differ — speak to us about your own position.',
      },
    ],
  },
  {
    slug: 'understanding-cash-flow-management',
    title: 'Understanding Cash Flow Management',
    category: 'Cash Flow',
    date: '2026-10-14',
    readTime: '6 min read',
    author: 'Horizon Financial Services',
    image: { id: '6693646', alt: 'Cash, invoices and a laptop on a desk during a cash flow review' },
    excerpt:
      'Profit and cash are different measures, and a business can be profitable while running out of money. A short forecast closes that gap.',
    blocks: [
      {
        type: 'p',
        text: 'Profit is an accounting measure of activity in a period. Cash is what is in the bank on a given day. The two diverge whenever timing differs: invoices issued but not collected, stock bought before it sells, tax accrued before it is paid.',
      },
      {
        type: 'p',
        text: 'A business can be genuinely profitable and still fail, because obligations arrive on dates that do not respect the profit and loss account. The remedy is unglamorous: forecast the cash, weekly, and look at it before making commitments.',
      },
      { type: 'h2', text: 'A forecast you will actually maintain' },
      {
        type: 'p',
        text: 'Thirteen weeks is a useful horizon. It is long enough to see a problem coming and short enough that the numbers are grounded in known invoices and scheduled payments rather than optimistic assumptions.',
      },
      {
        type: 'list',
        items: [
          'Opening balance, confirmed against the bank.',
          'Expected receipts by customer, using realistic payment behaviour rather than contractual terms.',
          'Scheduled payments: payroll, rent, suppliers, tax, debt service.',
          'A closing balance for each week, with the lowest point highlighted.',
        ],
      },
      { type: 'h2', text: 'The three levers' },
      {
        type: 'p',
        text: 'When the forecast shows pressure, there are only three levers: accelerate receipts, delay or reduce payments, or bring in additional funding. Each has a cost — a discount for early payment, a strained supplier relationship, interest — and the value of a forecast is that it lets you choose the cheapest lever early, rather than the only remaining one late.',
      },
      {
        type: 'p',
        text: 'Review the forecast at the same time each week, even when it looks fine. The habit is what makes it useful when it is not.',
      },
      {
        type: 'p',
        text: 'This article is general information, not professional advice.',
      },
    ],
  },
  {
    slug: 'common-accounting-mistakes',
    title: 'Common Accounting Mistakes Businesses Should Avoid',
    category: 'Accounting',
    date: '2026-09-30',
    readTime: '5 min read',
    author: 'Horizon Financial Services',
    image: { id: '7821914', alt: 'Working papers and calculations spread across a table' },
    excerpt:
      'The same handful of issues appear in almost every review of a growing business’s records. All of them are avoidable.',
    blocks: [
      {
        type: 'p',
        text: 'We review a lot of accounting files. The problems are rarely exotic — they are structural, repeated, and fixable. Here are the ones that appear most often.',
      },
      { type: 'h2', text: '1. Mixing personal and business spending' },
      {
        type: 'p',
        text: 'A single card used for both creates work at every stage: classification, reconciliation, tax preparation and any future review of the business. A separate account and card is the cheapest control a business can implement.',
      },
      { type: 'h2', text: '2. Reconciling only at year end' },
      {
        type: 'p',
        text: 'Reconciliation is a check, and a check performed twelve months late is mostly archaeology. Monthly reconciliation catches duplicate payments, missed invoices and fraud while the evidence is still fresh.',
      },
      { type: 'h2', text: '3. Treating the bank balance as the scoreboard' },
      {
        type: 'p',
        text: 'The bank balance says nothing about obligations already incurred. Accruals, tax and committed spend can make a healthy balance misleading. Read the balance sheet, not the app notification.',
      },
      { type: 'h2', text: '4. No consistent month-end close' },
      {
        type: 'p',
        text: 'If the period is never formally closed, adjustments leak into later months and comparisons stop meaning anything. A simple close checklist — reconciliations, accruals, review — is enough for most small businesses.',
      },
      { type: 'h2', text: '5. Keeping documentation somewhere else' },
      {
        type: 'p',
        text: 'An entry without its supporting document is an assertion. When a filing or a lender asks for evidence, the cost of reconstructing it is far higher than the cost of filing it properly the first time.',
      },
      {
        type: 'p',
        text: 'This article is general information, not professional advice.',
      },
    ],
  },
  {
    slug: 'financial-planning-for-small-businesses',
    title: 'Financial Planning for Small Businesses',
    category: 'Planning',
    date: '2026-09-12',
    readTime: '6 min read',
    author: 'Horizon Financial Services',
    image: { id: '7414218', alt: 'Planning tools, notes and financial schedules on a table' },
    excerpt:
      'A plan is not a prediction. It is a documented set of assumptions that lets you notice — early — when reality differs.',
    blocks: [
      {
        type: 'p',
        text: 'Small businesses often skip formal planning because the future feels too uncertain to model. That reasoning is backwards. Uncertainty is precisely why the assumptions should be written down: without them, you cannot tell whether a variance is a temporary wobble or a structural problem.',
      },
      { type: 'h2', text: 'Start with the operating model' },
      {
        type: 'p',
        text: 'Before any spreadsheet, describe how the business makes money in plain language: what it sells, to whom, at what price, with what direct cost, and how often. Most financial plans fail not because the arithmetic is wrong but because the operating model was never stated clearly enough to test.',
      },
      { type: 'h2', text: 'Build three scenarios, not one' },
      {
        type: 'list',
        items: [
          'Base case: the outcome you consider most likely.',
          'Downside: what happens if revenue is later, lower or both.',
          'Upside: the capacity and funding required if demand exceeds expectation.',
        ],
      },
      {
        type: 'p',
        text: 'The downside case is the important one. It answers the question every owner eventually faces: how much room do we have, and what would we do first if we needed to protect the business?',
      },
      { type: 'h2', text: 'Review on a rhythm' },
      {
        type: 'p',
        text: 'A plan reviewed quarterly stays useful. A plan written once and filed away becomes fiction within months. Compare actual results against the plan, record why they differ, and update the assumptions rather than quietly replacing the numbers.',
      },
      {
        type: 'p',
        text: 'This article is general information, not professional advice.',
      },
    ],
  },
  {
    slug: 'tax-compliance-what-owners-should-know',
    title: 'Tax Compliance: What Business Owners Should Know',
    category: 'Compliance',
    date: '2026-08-21',
    readTime: '5 min read',
    author: 'Horizon Financial Services',
    image: { id: '7821708', alt: 'Financial documents and a calculator prepared for a compliance review' },
    excerpt:
      'Compliance is largely a documentation discipline. The businesses that struggle are rarely the ones with complex affairs — they are the ones with disorganised records.',
    blocks: [
      {
        type: 'p',
        text: 'Tax obligations vary by jurisdiction, entity type and activity, so the specifics must always be confirmed for your own circumstances. The principles, however, are consistent across most regimes.',
      },
      { type: 'h2', text: 'Know your calendar' },
      {
        type: 'p',
        text: 'Most compliance failures are deadline failures rather than calculation failures. Maintain a single calendar listing every recurring obligation — filings, payments, reports — with an internal deadline set well ahead of the statutory one.',
      },
      { type: 'h2', text: 'Document the position, not just the number' },
      {
        type: 'p',
        text: 'If a reported figure is ever questioned, the question will be about evidence. Supporting documents should be filed against the entry they support, at the time the entry is made. Reconstruction after the fact is slow, expensive and often incomplete.',
      },
      { type: 'h2', text: 'Keep records current' },
      {
        type: 'p',
        text: 'Filings prepared from books closed months ago are filings prepared blind. Where records are maintained monthly, compliance becomes a review of known information rather than a project.',
      },
      { type: 'h2', text: 'Escalate specialist questions early' },
      {
        type: 'p',
        text: 'Cross-border activity, restructuring, equity arrangements and unusual transactions generally require advice from appropriately licensed specialists. The cost of asking early is small; the cost of discovering an issue during a review is not.',
      },
      {
        type: 'p',
        text: 'This article is general information, not professional advice. Confirm obligations for your own circumstances with a qualified adviser.',
      },
    ],
  },
  {
    slug: 'how-financial-reports-improve-decisions',
    title: 'How Financial Reports Improve Management Decisions',
    category: 'Reporting',
    date: '2026-08-05',
    readTime: '5 min read',
    author: 'Horizon Financial Services',
    image: { id: '7868970', alt: 'Financial statements and performance schedules prepared for management' },
    excerpt:
      'A good report does three things: it is accurate, it is comparable, and it answers a question someone was already asking.',
    blocks: [
      {
        type: 'p',
        text: 'Many management reports are comprehensive and unused. They present every account in the ledger, in the same order, month after month, without commentary. The information is correct and the report changes nothing.',
      },
      { type: 'h2', text: 'Design around decisions' },
      {
        type: 'p',
        text: 'Before choosing a format, list the decisions the report must support: pricing, hiring, purchasing, investment, financing. Then include only what those decisions require. A four-page pack read every month beats a twenty-page pack opened once a quarter.',
      },
      { type: 'h2', text: 'Comparability is the quiet requirement' },
      {
        type: 'p',
        text: 'A figure in isolation means little. The same figure against last month, against budget and against the same month last year begins to tell a story. This is why consistent classification matters more than elegant presentation.',
      },
      { type: 'h2', text: 'Commentary does the work' },
      {
        type: 'list',
        items: [
          'What moved, in plain language.',
          'Why it moved — volume, price, timing, or a one-off.',
          'What it means for the next period.',
          'What decision, if any, is required.',
        ],
      },
      {
        type: 'p',
        text: 'Written commentary also creates a record of management’s reasoning. Reviewed a year later, it shows whether the business understood its own results at the time — which is often more valuable than the numbers themselves.',
      },
      {
        type: 'p',
        text: 'This article is general information, not professional advice.',
      },
    ],
  },
]

export const getArticle = (slug) => articles.find((article) => article.slug === slug)
