declare module 'onnxruntime-node' {
  export type Tensor = {
    type: string;
    data: TypedArray | number[] | string[];
    dims: number[];
  };

  export class InferenceSession {
    static create(path: string): Promise<InferenceSession>;
    inputNames: string[];
    outputNames: string[];
    run(feeds: Record<string, Tensor>): Promise<Record<string, Tensor>>;
  }
  export type TypedArray =
    | Int8Array
    | Uint8Array
    | Int16Array
    | Uint16Array
    | Int32Array
    | Uint32Array
    | Float32Array
    | Float64Array;
}
