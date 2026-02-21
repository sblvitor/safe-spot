import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/rotacao')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/rotacao"!</div>
}
