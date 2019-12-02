/*
 * Copyright (c) 2015-2018 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */
'use strict';


/**
 * This class is handling the controller for the workspace runtime warnings container.
 * @author Ann Shumilova
 */
export class WorkspaceWarningsController {
  /**
   * Workspace is provided by the scope.
   */
  workspace: che.IWorkspace;
  /**
   * List of warnings.
   */
  warnings: che.IWorkspaceWarning[];

  /**
   * Default constructor that is using resource
   */
  constructor() {
    this.warnings = [];
  }

  $onInit(): void {
    if (this.workspace && this.workspace.runtime && this.workspace.runtime.warnings) {
      this.warnings = this.warnings.concat(this.workspace.runtime.warnings);
    }
  }

}


