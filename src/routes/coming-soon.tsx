import ComingSoon from '@/components/ComingSoon'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/coming-soon')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden max-w-screen">
        <ComingSoon />
      </div>
  )
}
