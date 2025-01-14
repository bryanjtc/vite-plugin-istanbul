declare module 'istanbul-lib-instrument' {
  import { ExistingRawSourceMap } from 'rollup';

  interface Instrumenter {
    instrumentSync(code: string, filename: string, inputSourceMap?: ExistingRawSourceMap): string;
    lastSourceMap(): ExistingRawSourceMap;
  }

  export function createInstrumenter(opts: {
    coverageGlobalScopeFunc?: boolean,
    coverageGlobalScope?: string;
    preserveComments?: boolean,
    produceSourceMap?: boolean,
    autoWrap?: boolean,
    esModules?: boolean,
  }): Instrumenter;
}

declare module '@istanbuljs/load-nyc-config' {
  export interface NYCConfig {
    extension?: string[];
    include?: string[];
    exclude?: string[];
  }

  export function loadNycConfig(opts: {
    cwd?: string,
    nycrcPath?: string,
  }): NYCConfig;
}

declare module 'test-exclude' {
  class TestExclude {
    constructor(opts: {
      cwd?: string | string[],
      include?: string | string[],
      exclude?: string | string[],
      extension?: string | string[],
      excludeNodeModules?: boolean,
    })

    shouldInstrument(filePath:string):boolean
  }

  export = TestExclude
}
