# the-controller-role@1.0.0

Role controller for the-server

+ Functions
  + [create(args)](#the-controller-role-function-create)
+ [`TheRoleCtrl`](#the-controller-role-classes) Class
  + [new TheRoleCtrl()](#the-controller-role-classes-the-role-ctrl-constructor)
  + [ctrl.grant(user, roleCode)](#the-controller-role-classes-the-role-ctrl-grant)
  + [ctrl.revoke(user, roleCode)](#the-controller-role-classes-the-role-ctrl-revoke)
  + [ctrl.hasRole(user, roleCode)](#the-controller-role-classes-the-role-ctrl-hasRole)

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



<a class='md-heading-link' name="the-controller-role-classes-the-role-ctrl-grant" ></a>

### ctrl.grant(user, roleCode) -> `Promise.<boolean>`

Grant a role to user

| Param | Type | Description |
| ----- | --- | -------- |
| user | UserEntity | Use to grand |
| roleCode | string | Role code string |


<a class='md-heading-link' name="the-controller-role-classes-the-role-ctrl-revoke" ></a>

### ctrl.revoke(user, roleCode) -> `Promise.<boolean>`

Revoke a role from user

| Param | Type | Description |
| ----- | --- | -------- |
| user | UserEntity | Use to grand |
| roleCode | string | Role code string |


<a class='md-heading-link' name="the-controller-role-classes-the-role-ctrl-hasRole" ></a>

### ctrl.hasRole(user, roleCode) -> `Promise.<boolean>`

Has a role or not

| Param | Type | Description |
| ----- | --- | -------- |
| user | UserEntity | Use to grand |
| roleCode | string | Role code string |




