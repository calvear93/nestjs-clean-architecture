## Core/Domain Layer (Enterprise Bussiness Rules)

Bussiness logic, domain entities (value objects), validations, calcs or any
bussiness rules applying to entities.

-   **Value Objects** (domain class/interface): from bussiness core.
    -   i.e. User, Document, Company, Stat.
-   **Aggregates** (domain class/interface/functions): base entities and extensions, relations or associated entities.
    -   i.e. AdminList, TrackableEntity, UserRoles, addUserRol, getAdminUsers.
-   **Core Functions**: isolates bussiness rules for the entities.
    -   i.e. getFullName(user), isValid(document), getAgeAverage(people).
-   **Schemas and Validators (class/object/function)**: data type or constraints, entities and values validators.
    -   i.e. UserSchema, UserIdPipe, userBelongsToCompany(user, company), documentIsValid(document).
-   **Core Events, Errors and Exceptions**:
    -   i.e. CompanyAlreadyExistsException, UserAgeNotAllowed, DocumentNotFound.
-   **Constants** (const/enums/lookups/lists): bussiness values, constraints, limits.
    -   i.e. BussinessDays, MAX_USER_PER_COMPANY.

TypeScript/JavaScript are functional languages, so, we should to
prefer functions for implements any entity bussiness logic,
instead of create classes with methods and logic inside.
