## Application/Use Cases Layer (Application Bussiness Rules)

Application flows, implementation of use cases, mappers, transformers, DTOs,
DAO (a.k.a. repositories) contracts, or abstractions of any infrastructure layer service.

-   **Services/Use Cases** (class/function), a.k.a. interactors, domain/infrastructure orchestation for solve one or multiple related use cases.
    -   i.e. UserService, UserRegisterUseCase, StatsManager, DocumentHandler.
-   **Abstractions/Contracts** (abstract class/interface),
    -   i.e. UserRepository, CompanyProvider, DocumentProvider.
-   **Data Transfer Object** (class/interface), input/output object definitions.
    -   i.e. CreateUser, GetCompanyBy, DeletedDocuments, PaginableDataset.
-   **Mappers and Transformers** (function), translate and parse application objects to domain entities.
    -   i.e. createUser(createUserDto), documentToBase64(documentBlob), etc.
-   **Application Events, Errors and Exceptions**:
    -   i.e. RepositoryConnectionError, UserAlreadyIsAdminException, ReportGeneratedSuccessfully.

Uses core entities and logic, and infrastructure abstractions/contracts.
