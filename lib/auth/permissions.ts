export const Roles = {
  OWNER: "owner",
  ADMIN: "admin",
  SUPPORT: "support",
  CUSTOMER: "customer",
} as const;

export type Role = (typeof Roles)[keyof typeof Roles];

export function isAdmin(role: Role) {
  return role === Roles.OWNER || role === Roles.ADMIN;
}

export function isOwner(role: Role) {
  return role === Roles.OWNER;
}