import { Form, Link, NavLink, Outlet } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { Button, buttonVariants } from "~/common/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "~/common/components/ui/dialog";
import { Textarea } from "~/common/components/ui/textarea";
import { Badge } from "~/common/components/ui/badge";
import { cn } from "~/lib/utils";

export default function ProfileLayout() {
  return (
    <div className="space-y-20">
      <div className="flex items-center gap-4">
        <Avatar className="size-40">
          <AvatarImage src="https://github.com/serranoarevalo.png" />
          <AvatarFallback>S</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <div className="flex gap-2">
            <h1 className="text-2xl font-semibold">Nico</h1>
            <Button variant="outline" asChild>
              <Link to="/my/settings">Edit Profile</Link>            
            </Button>
            <Button variant="secondary">Follow</Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Message</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Message</DialogTitle>
                </DialogHeader>
                <DialogDescription className="space-y-4">
                  <span className="text-sm text-muted-foreground">Send a message to Nico</span>
                  <Form className="space-y-4">
                    <Textarea placeholder="Message" className="resize-none" rows={4} />
                    <Button type="submit">Send</Button>
                  </Form>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-sm text-muted-foreground">@john_doe</span>
            <Badge variant={"secondary"}>Product Manager</Badge>
            <Badge variant={"secondary"}>100 followers</Badge>
            <Badge variant={"secondary"}>100 following</Badge>
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        {[
          {label: "About", to: "/users/username"},
          {label: "Products", to: "/users/username/products"},
          {label: "Posts", to: "/users/username/posts"}].map((item) => (
            <NavLink 
              end
              key={item.label} 
              className={({isActive}) => 
                cn(
                  buttonVariants({variant: "outline"}),
                  isActive && "bg-accent text-accent-foreground"
                )
              }
              to={item.to}>
                {item.label}
            </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  )
} 