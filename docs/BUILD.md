## Building Docker Image Directly

You will need a CluedIn personal access token (PAT) in order to access the NPM feeds.

> Ensure token is BASE64 encoded before passing it in!

```bash
docker build -m 6g --build-arg NPM_TOKEN=[BASE64 ENCODED TOKEN] -t [IMAGE TAG NAME] .
```

For example:

```bash
docker build -m 6g --build-arg NPM_TOKEN=12bc345bd587ef -t cluedin/poc:latest .
```

## Using the Azure Devops Build Pipeline

The `azure-pipelines.yml` contains a simple build pipeline that will version, build, and push
your docker image to a container registry.

The pipeline will automatically build when commits are pushed to the `master` branch.
Any pull-requests targeting master will also trigger a build.  Pull-request builds will
be labelled with a `pr<id>` version string.

### Configure Your Build
1. In Azure Devops, create a new project (or select an existing one)
1. Under 'Project Settings', Select 'Service Connections'
1. Click 'New service connection' and then select 'Docker Registry'
1. Complete all details, then verify and save.
   > You'll need the _service connection name_ for later
1. Select 'Pipelines', then click the button to create a new pipeline
1. Select your repository, the pipeline configuration should be identified and loaded
1. Select variables and configure the variables as follows:

| Name              | Value                                                        | Keep Secret | Allow Override |
| ----------------- | ------------------------------------------------------------ | ----------- | -------------- |
| npm.token         | Enter your base64 encoded npm token                          | true        | false          |
| docker.registry   | Enter the name of the service connection you created earlier | false       | false          |
| docker.repository | Enter the repository name (e.g. my-company/cluedin-ui)       | false       | false          |
