import createCustomClient from "./createInkeepClient";
import { inputs } from "./inputParams";
require('dotenv').config()

async function main() {
  const globalClient = createCustomClient();

  // Get today's date in MM/DD format
  const today = new Date();
  const formattedDate = `${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${today.getDate().toString().padStart(2, "0")}`;

  // Create organization
  const { createOrganization } = await globalClient.mutation({
    createOrganization: {
      __args: {
        input: {
          alias: inputs.organizationAlias,
          displayName: inputs.organizationDisplayName,
          portalDisplayPreferences: {
            defaultColorMode: inputs.defaultColorMode,
            primaryBrandColor: inputs.primaryBrandColor,
          },
        },
      },
      organization: {
        alias: true,
        displayName: true,
        id: true,
        portalDisplayPreferences: {
          defaultColorMode: true,
          primaryBrandColor: true,
        },
      },
    },
  });

  console.log("Created organization");
  console.log(createOrganization);

  if (!createOrganization) {
    throw new Error("Sandbox creation failed.");
  }

  const orgClient = createCustomClient(createOrganization.organization.alias);

  // Create project
  const { createProject } = await orgClient.mutation({
    createProject: {
      __args: {
        input: {
          displayName: inputs.organizationDisplayName,
          chatSubjectName: inputs.chatSubjectName,
          oneLineDescription: inputs.oneLineDescription,
        },
      },
      project: {
        id: true,
        displayName: true,
        chatSubjectName: true,
        // context: true,
        // createdAt: true,
      },
    },
  });

  console.log("Created Project");
  console.log(createProject);

  if (!createProject.project) {
    throw new Error("Sandbox creation failed.");
  }

  // Create sandbox
  const { createSandbox } = await orgClient.mutation({
    createSandbox: {
      __args: {
        input: {
          projectId: createProject.project.id,
          type: "DEMO",
          displayName: `${inputs.organizationDisplayName} ${formattedDate} Demo`,
          isTrial: true,
        },
      },
      sandbox: {
        id: true,
      },
    },
  });

  console.log("Created Sandbox");
  console.log(createSandbox);

  if (!createSandbox.sandbox) {
    throw new Error("Sandbox creation failed.");
  }

  // Get render settings
  const { sandboxRenderSettings } = await orgClient.query({
    sandboxRenderSettings: {
      __args: {
        input: {
          organizationAlias: createOrganization.organization.alias,
          sandboxId: createSandbox.sandbox.id,
        },
      },
      displayName: true,
      widgetSettings: {
        apiKey: true,
        integrationId: true,
        organizationId: true,
        organizationDisplayName: true,
      },
      url: true,
      id: true,
    },
  });
  console.log(sandboxRenderSettings);
  console.log("Sandbox found at:");
  console.log(
    `https://share.inkeep.com/${createOrganization.organization.alias}/${createSandbox.sandbox.id}`
  );
}

main();
