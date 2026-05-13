enum Role {
  Admin,
  Editor,
  Guest
}

const PermissionMap: Record<Role, boolean> = {
  [Role.Admin]: true,
  [Role.Editor]: false,
  [Role.Guest]: true
};