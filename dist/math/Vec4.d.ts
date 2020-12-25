import { EventHandler } from '../render/eventhandler';
export declare class Vec4 extends EventHandler {
    private _x;
    private _y;
    private _z;
    private _w;
    isVec4: boolean;
    x: number;
    y: number;
    z: number;
    w: number;
    constructor(_x?: number, _y?: number, _z?: number, _w?: number);
    static isVec4(v: Vec4): boolean;
    get width(): number;
    set width(value: number);
    get height(): number;
    set height(value: number);
    set(x: number, y: number, z: number, w: number): this;
    setScalar(scalar: number): this;
    setX(x: number): this;
    setY(y: number): this;
    setZ(z: number): this;
    setW(w: number): this;
    setComponent(index: number, value: number): this;
    getComponent(index: number): number;
    clone(): Vec4;
    copy(v: {
        x: number;
        y: number;
        z: number;
        w: number | undefined;
    }): this;
    add(v: Vec4, w?: Vec4): Vec4;
    addScalar(s: number): this;
    addVecs(a: Vec4, b: Vec4): this;
    addScaledVec(v: Vec4, s: number): this;
    sub(v: Vec4, w?: Vec4): this;
    subScalar(s: number): this;
    subVecs(a: Vec4, b: Vec4): this;
    multiplyScalar(scalar: number): this;
    applyMat4(m: {
        elements: any;
    }): this;
    divideScalar(scalar: number): this;
    setAxisAngleFromQuat(q: {
        w: number;
        x: number;
        y: number;
        z: number;
    }): this;
    setAxisAngleFromRotationMatrix(m: {
        elements: any;
    }): this;
    min(v: Vec4): this;
    max(v: Vec4): this;
    clamp(min: Vec4, max: Vec4): this;
    clampScalar(minVal: number, maxVal: number): this;
    clampLength(min: number, max: number): this;
    floor(): this;
    ceil(): this;
    round(): this;
    roundToZero(): this;
    negate(): this;
    dot(v: Vec4): number;
    lengthSq(): number;
    length(): number;
    manhattanLength(): number;
    normalize(): this;
    setLength(length: any): this;
    lerp(v: Vec4, alpha: number): this;
    lerpVecs(v1: Vec4, v2: any, alpha: any): Vec4;
    equals(v: Vec4): boolean;
    fromArray(array: number[], offset?: number): this;
    toArray(array?: number[], offset?: number): number[];
    fromBufferAttribute(attribute: any, index: any, offset: undefined): this;
}
export declare function v4(x?: number, y?: number, z?: number, w?: number): Vec4;
