import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/colaboradores')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/colaboradores"!</div>
}
