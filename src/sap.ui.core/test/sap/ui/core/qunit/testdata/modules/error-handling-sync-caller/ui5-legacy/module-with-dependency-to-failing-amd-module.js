jQuery.sap.declare("modules.error-handling-sync-caller.ui5-legacy.module-with-dependency-to-failing-amd-module", false);
jQuery.sap.require("modules.error-handling-sync-caller.amd.failing-module2");

QUnit.config.current.assert.ok(false, "module body should not be reached");