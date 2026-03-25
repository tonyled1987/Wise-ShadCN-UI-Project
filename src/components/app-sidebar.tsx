"use client"

import Link from "next/link"
import {
  Home,
  CreditCard,
  List,
  ArrowLeftRight,
  Users,
  BarChart3,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

/**
 * DESIGNER NOTE: Wise-style app sidebar (left navigation)
 * — Flat list only: Home, Cards, Transactions, Payments, Recipients, Insights (no sub-navigation).
 * — To restyle: edit className on Sidebar, or override --sidebar-* in globals.css
 */
export function AppSidebar() {
  return (
    <Sidebar className="border-none ml-9 mt-16 bg-sidebar">
      <div className="flex h-fit w-full flex-col items-center gap-10 py-4 bg-sidebar">
        <SidebarHeader className="w-full flex items-center justify-center p-0">
          <svg className="text-secondary" width="106" height="24" viewBox="0 0 106 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Wise">
            <path d="M58.7377 0.358803H65.2359L61.9668 23.681H55.4685L58.7377 0.358803ZM50.5455 0.358803L46.1602 13.794L44.2465 0.358803H39.7017L33.9608 13.7541L33.2433 0.358803H26.9442L29.1369 23.681H34.3595L40.818 8.93022L43.0904 23.681H48.2332L56.7249 0.358803H50.5455ZM105.103 13.9136H89.6744C89.7542 16.9435 91.5681 18.9369 94.2392 18.9369C96.2525 18.9369 97.8472 17.8604 99.0831 15.8073L104.291 18.1747C102.501 21.7017 98.729 24 94.0798 24C87.741 24 83.535 19.7342 83.535 12.8771C83.535 5.34221 88.4784 0 95.4552 0C101.595 0 105.462 4.14618 105.462 10.6046C105.462 11.6811 105.342 12.7574 105.103 13.9136ZM99.3223 9.44848C99.3223 6.73753 97.8073 5.02323 95.3755 5.02323C92.8638 5.02323 90.7907 6.81725 90.2325 9.44848H99.3223ZM6.63326 7.38685L0 15.1389H11.844L13.1749 11.4836H8.09965L11.2007 7.89805L11.2107 7.80294L9.19424 4.3319H18.2662L11.2339 23.6811H16.0463L24.538 0.358823H2.60021L6.63326 7.38685ZM75.8007 5.02325C78.093 5.02325 80.1017 6.25598 81.8558 8.3689L82.7774 1.79402C81.1429 0.687707 78.9303 0 76 0C70.1795 0 66.9104 3.40865 66.9104 7.73421C66.9104 10.7342 68.5848 12.5681 71.3356 13.7541L72.6512 14.3521C75.103 15.3987 75.7609 15.917 75.7609 17.0233C75.7609 18.1694 74.6545 18.897 72.9702 18.897C70.1894 18.907 67.937 17.4817 66.2426 15.0498L65.3036 21.7488C67.2332 23.2201 69.7067 24 72.9702 24C78.5017 24 81.9004 20.8106 81.9004 16.3853C81.9004 13.3754 80.5649 11.4419 77.196 9.9269L75.7609 9.24918C73.7675 8.3621 73.0898 7.87375 73.0898 6.89702C73.0898 5.84055 74.0167 5.02325 75.8007 5.02325Z" fill="currentColor"/>
          </svg>
        </SidebarHeader>
        <SidebarContent className="w-full">
          <SidebarGroup className="p-0">
            <SidebarGroupContent>
              <SidebarMenu className="flex flex-col items-start gap-0.5 self-stretch py-4 px-6">
                <SidebarMenuItem className="w-full">
                  <SidebarMenuButton asChild isActive className="rounded-full data-[active=true]:bg-muted hover:bg-muted">
                    <Link href="/" className="flex items-center gap-[19px] py-3 px-4 rounded-full w-full text-sm leading-5 text-secondary font-medium">
                      <Home className="size-4" />
                      <span>Home</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="w-full">
                  <SidebarMenuButton asChild className="rounded-full hover:bg-muted">
                    <Link href="/" className="flex items-center gap-[19px] py-3 px-4 rounded-full w-full text-sm leading-5 text-muted-foreground font-normal">
                      <CreditCard className="size-4" />
                      <span>Cards</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="w-full">
                  <SidebarMenuButton asChild className="rounded-full hover:bg-muted">
                    <Link href="/" className="flex items-center gap-[19px] py-3 px-4 rounded-full w-full text-sm leading-5 text-muted-foreground font-normal">
                      <List className="size-4" />
                      <span>Transactions</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="w-full">
                  <SidebarMenuButton asChild className="rounded-full hover:bg-muted">
                    <Link href="/" className="flex items-center gap-[19px] py-3 px-4 rounded-full w-full text-sm leading-5 text-muted-foreground font-normal">
                      <ArrowLeftRight className="size-4" />
                      <span>Payments</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="w-full">
                  <SidebarMenuButton asChild className="rounded-full hover:bg-muted">
                    <Link href="/" className="flex items-center gap-[19px] py-3 px-4 rounded-full w-full text-sm leading-5 text-muted-foreground font-normal">
                      <Users className="size-4" />
                      <span>Recipients</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="w-full">
                  <SidebarMenuButton asChild className="rounded-full hover:bg-muted">
                    <Link href="/" className="flex items-center gap-[19px] py-3 px-4 rounded-full w-full text-sm leading-5 text-muted-foreground font-normal">
                      <BarChart3 className="size-4" />
                      <span>Insights</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </div>
    </Sidebar>
  )
}
