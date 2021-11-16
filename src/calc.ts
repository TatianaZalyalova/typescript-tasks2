type FIXME =  ReturnType<typeof add | typeof subtract>;

type Equals<A, B> = A extends B ? (B extends A ? "success" : never) : never;

type Add<A, B> =  FIXME;
function add(A:number, B:number):number {
    return A + B;
}
function  subtract(A:number, B:number):number {
    return A - B;
}

type Subtract<A, B> = FIXME;

export type OnePlusOneTest = Equals<Add<1, 1>, 2>;
export type TwoMinusOneTest = Equals<Subtract<2, 1>, 1>;