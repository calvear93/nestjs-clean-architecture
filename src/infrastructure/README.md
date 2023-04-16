## Infrastructure/Adapters Layer (Drivers, Providers, Config)

Bridge with frameworks, persistence, external services,
HTTP controllers, queue or event messages, etc.
Implementations for input, output, data communication
and processing by specific technologies.

-   **Entrypoint** (class/function): application adapters and infrastructure initializer.
    -   i.e. appBootstrap(), app.listen(PORT, ...), NestFactory.create(...).
-   **Gateways** (class/function): controllers, event handlers/listeners/consumers, crons, job processors, websocket handler.
    -   i.e. UserController, AdminUpdateSubscriber, DeleteNoValidCompaniesJob, CertificateRotateCronJob.
-   **Publishers/Emitters** (class/function): event publishers, queue messages, topic emitters, websockets.
    -   i.e. UserActionLogsProducer, DailyJobEnqueue, sendAdminCreateMessage(...), adminDeletedNotify(...).
-   **Authentication/Authorization** (class/function/middlewares): infrastructure security, gateways protection.
    -   i.e. ApiKeyAuth(...), BearerJwtAuth(...), auth.IsAdmin(user), sessionMiddleware(...).
-   **Providers/Repositories** (class/function): persistence adapters, external system API service, infrastructure communication as file storage, system OS.
    -   i.e. MsSqlProvider, UserAzStorageRepository, ApiManagementService.
-   **Mappers and Transformers** (function), translate and parse infrastructure objects, exceptions or events to application ones.
    -   i.e. mapUserUpsertRoles(roles), decryptPassword(password), etc.
-   **Events, Errors and Exceptions**: generally are included with frameworks/libraries
    -   i.e. PrismaClientRustPanicError, RedisConnectionAborted, FatalProcessOutOfMemory.
-   **Configuration/Constants** (const/enums/lookups/lists): infrastructure config.
    -   i.e. SwaggerDocumentConf, RedisConnection, AzCredentials.

Classes or any logic used in Application layer must
implement abstractions/contracts from it.
