# the-controller-role@1.0.1

Role controller for the-server

+ Functions
  + [create(args)](#the-controller-role-function-create)
+ [`TheRoleCtrl`](#the-controller-role-classes) Class
  + [new TheRoleCtrl()](#the-controller-role-classes-the-role-ctrl-constructor)
  + [ctrl.grantTo(user, roleCode)](#the-controller-role-classes-the-role-ctrl-grantTo)
  + [ctrl.revokeFrom(user, roleCode)](#the-controller-role-classes-the-role-ctrl-revokeFrom)
  + [ctrl.hasAnyOf()](#the-controller-role-classes-the-role-ctrl-hasAnyOf)
  + [ctrl.has()](#the-controller-role-classes-the-role-ctrl-has)

## Functions

<a class='md-heading-link' name="the-controller-role-function-create" ></a>

### create(args) -> `TheRoleCtrl`

Create a TheRoleCtrl instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |



<a class='md-heading-link' name="the-controller-role-classes"></a>

## `TheRoleCtrl` Class

Role controller for the-server

**Extends**: 

+ `TheCtrl`



<a class='md-heading-link' name="the-controller-role-classes-the-role-ctrl-constructor" ></a>

### new TheRoleCtrl()

Constructor of TheRoleCtrl class



<a class='md-heading-link' name="the-controller-role-classes-the-role-ctrl-grantTo" ></a>

### ctrl.grantTo(user, roleCode) -> `Promise.<boolean>`

Grant a role to user

| Param | Type | Description |
| ----- | --- | -------- |
| user | UserEntity | Use to grand |
| roleCode | string | Role code string |


<a class='md-heading-link' name="the-controller-role-classes-the-role-ctrl-revokeFrom" ></a>

### ctrl.revokeFrom(user, roleCode) -> `Promise.<boolean>`

Revoke a role from user

| Param | Type | Description |
| ----- | --- | -------- |
| user | UserEntity | Use to grand |
| roleCode | string | Role code string |


<a class='md-heading-link' name="the-controller-role-classes-the-role-ctrl-hasAnyOf" ></a>

### ctrl.hasAnyOf() -> `Promise.<boolean>`

Has any of roles

<a class='md-heading-link' name="the-controller-role-classes-the-role-ctrl-has" ></a>

### ctrl.has() -> `Promise.<boolean>`

Check if has a role for signed user



