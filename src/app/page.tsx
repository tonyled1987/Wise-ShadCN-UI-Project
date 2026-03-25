import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUp, Plus, Landmark } from "lucide-react"

/**
 * DESIGNER NOTE: Wise-style dashboard — layout and structure only.
 * All core sections use ShadCN components. Designers can restyle to match Wise UI (colours, typography, spacing).
 *
 * Sections:
 * — Total balance + action buttons (Send, Add money, Request)
 * — Currency account cards (EUR, AUD, CAD, GBP)
 * — Recent transactions list
 * — Footer (Provided by Wise Assets Europe)
 */

const CURRENCY_ACCOUNTS = [
  { code: "EUR", label: "EUR", accountId: "51568", balance: "98.00", flag: "/flags/europe.svg" },
  { code: "AUD", label: "AUD", accountId: "30779", balance: "0.00", flag: "/flags/australia.svg" },
  { code: "CAD", label: "CAD", accountId: "15376", balance: "0.00", flag: "/flags/canada.svg" },
  { code: "GBP", label: "GBP", accountId: "13159", balance: "0.00", flag: "/flags/united-kingdom.svg" },
]

const RECENT_TRANSACTIONS = [
  { id: "1", icon: ArrowUp, name: "Hannah Johnson", subtitle: "Sent - 18 Apr", amount: "49 EUR", isCredit: false },
  { id: "2", icon: Plus, name: "To EUR", subtitle: "Added - 18 Apr", amount: "+ 50 EUR", subAmount: "50.44 EUR", isCredit: true },
  { id: "3", icon: ArrowUp, name: "Brandon Bolt", subtitle: "Sent - 2 Apr", amount: "110 EUR", isCredit: false },
]

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[976px] flex flex-1 flex-col gap-8 pr-6 pt-14 pb-6 overflow-hidden">
      {/* Total balance + actions */}
      <section>
        <div className="space-y-0">
          <p className="text-sm font-normal text-muted-foreground">Total balance</p>
          <p className="text-3xl font-bold tracking-tight">98.00 EUR</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-5">
          <Button size="sm" variant="default">
            Send
          </Button>
          <Button size="sm" variant="secondary">
            Add money
          </Button>
          <Button size="sm" variant="secondary">
            Request
          </Button>
        </div>
      </section>

      {/* Currency account cards */}
      <section className="flex gap-3 w-full -mt-2">
        {CURRENCY_ACCOUNTS.map((account) => (
          <Card key={account.code} className="bg-card shrink-0 w-64 h-[206px] justify-between">
            <CardHeader className="flex flex-row items-center justify-start space-y-0 pb-2">
                <img src={account.flag} alt={account.label} className="size-12 shrink-0 rounded-full object-cover" aria-hidden />
              <CardTitle className="text-base font-medium">{account.label}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <Landmark className="size-3" />
                <span>··</span>
                <span>{account.accountId.slice(0, 1)} {account.accountId.slice(1)}</span>
              </p>
              <p className="text-2xl font-bold">{account.balance}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Recent transactions */}
      <section className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Transactions</h2>
          <Link
            href="/"
            className="text-sm font-medium text-secondary underline underline-offset-4 hover:no-underline hover:text-secondary/90 transition-colors"
          >
            See all
          </Link>
        </div>
        <ul className="mt-[18px]">
          {RECENT_TRANSACTIONS.map((tx) => (
            <li key={tx.id} className="flex w-full items-center gap-4 p-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-muted border border-border">
                <tx.icon className="size-6 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium">{tx.name}</p>
                <p className="text-sm text-muted-foreground">{tx.subtitle}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className={`font-medium ${tx.isCredit ? "text-secondary" : "text-foreground"}`}>
                  {tx.amount}
                </p>
                {tx.subAmount && (
                  <p className="text-sm text-muted-foreground">{tx.subAmount}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-auto pt-4">
        <p className="text-xs text-muted-foreground">
          Provided by Wise Assets Europe
        </p>
      </footer>
    </div>
  )
}
