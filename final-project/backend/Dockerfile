# Use the official .NET SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src

# Copy csproj and restore as distinct layers
COPY ./src/TodoApi/*.csproj ./TodoApi/
RUN dotnet restore ./TodoApi/TodoApi.csproj

# Copy everything else and build
COPY ./src/TodoApi/ ./TodoApi/
WORKDIR /src/TodoApi
RUN dotnet publish -c Release -o /app/publish

# Runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "TodoApi.dll"]