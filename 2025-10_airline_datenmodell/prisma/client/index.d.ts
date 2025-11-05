
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Airport
 * 
 */
export type Airport = $Result.DefaultSelection<Prisma.$AirportPayload>
/**
 * Model Flight
 * 
 */
export type Flight = $Result.DefaultSelection<Prisma.$FlightPayload>
/**
 * Model Passenger
 * 
 */
export type Passenger = $Result.DefaultSelection<Prisma.$PassengerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FlightStatus: {
  SCHEDULED: 'SCHEDULED',
  BOARDING: 'BOARDING',
  DEPARTED: 'DEPARTED',
  IN_AIR: 'IN_AIR',
  LANDED: 'LANDED',
  CANCELLED: 'CANCELLED',
  DELAYED: 'DELAYED'
};

export type FlightStatus = (typeof FlightStatus)[keyof typeof FlightStatus]

}

export type FlightStatus = $Enums.FlightStatus

export const FlightStatus: typeof $Enums.FlightStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Airports
 * const airports = await prisma.airport.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Airports
   * const airports = await prisma.airport.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.airport`: Exposes CRUD operations for the **Airport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Airports
    * const airports = await prisma.airport.findMany()
    * ```
    */
  get airport(): Prisma.AirportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flight`: Exposes CRUD operations for the **Flight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flights
    * const flights = await prisma.flight.findMany()
    * ```
    */
  get flight(): Prisma.FlightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passenger`: Exposes CRUD operations for the **Passenger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passengers
    * const passengers = await prisma.passenger.findMany()
    * ```
    */
  get passenger(): Prisma.PassengerDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Airport: 'Airport',
    Flight: 'Flight',
    Passenger: 'Passenger'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "airport" | "flight" | "passenger"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Airport: {
        payload: Prisma.$AirportPayload<ExtArgs>
        fields: Prisma.AirportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AirportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AirportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          findFirst: {
            args: Prisma.AirportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AirportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          findMany: {
            args: Prisma.AirportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>[]
          }
          create: {
            args: Prisma.AirportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          createMany: {
            args: Prisma.AirportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AirportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>[]
          }
          delete: {
            args: Prisma.AirportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          update: {
            args: Prisma.AirportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          deleteMany: {
            args: Prisma.AirportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AirportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AirportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>[]
          }
          upsert: {
            args: Prisma.AirportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          aggregate: {
            args: Prisma.AirportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAirport>
          }
          groupBy: {
            args: Prisma.AirportGroupByArgs<ExtArgs>
            result: $Utils.Optional<AirportGroupByOutputType>[]
          }
          count: {
            args: Prisma.AirportCountArgs<ExtArgs>
            result: $Utils.Optional<AirportCountAggregateOutputType> | number
          }
        }
      }
      Flight: {
        payload: Prisma.$FlightPayload<ExtArgs>
        fields: Prisma.FlightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          findFirst: {
            args: Prisma.FlightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          findMany: {
            args: Prisma.FlightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>[]
          }
          create: {
            args: Prisma.FlightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          createMany: {
            args: Prisma.FlightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>[]
          }
          delete: {
            args: Prisma.FlightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          update: {
            args: Prisma.FlightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          deleteMany: {
            args: Prisma.FlightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlightUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>[]
          }
          upsert: {
            args: Prisma.FlightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          aggregate: {
            args: Prisma.FlightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlight>
          }
          groupBy: {
            args: Prisma.FlightGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlightGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlightCountArgs<ExtArgs>
            result: $Utils.Optional<FlightCountAggregateOutputType> | number
          }
        }
      }
      Passenger: {
        payload: Prisma.$PassengerPayload<ExtArgs>
        fields: Prisma.PassengerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PassengerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PassengerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          findFirst: {
            args: Prisma.PassengerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PassengerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          findMany: {
            args: Prisma.PassengerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>[]
          }
          create: {
            args: Prisma.PassengerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          createMany: {
            args: Prisma.PassengerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PassengerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>[]
          }
          delete: {
            args: Prisma.PassengerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          update: {
            args: Prisma.PassengerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          deleteMany: {
            args: Prisma.PassengerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PassengerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PassengerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>[]
          }
          upsert: {
            args: Prisma.PassengerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerPayload>
          }
          aggregate: {
            args: Prisma.PassengerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassenger>
          }
          groupBy: {
            args: Prisma.PassengerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PassengerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PassengerCountArgs<ExtArgs>
            result: $Utils.Optional<PassengerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    airport?: AirportOmit
    flight?: FlightOmit
    passenger?: PassengerOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AirportCountOutputType
   */

  export type AirportCountOutputType = {
    departures: number
    arrivals: number
  }

  export type AirportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departures?: boolean | AirportCountOutputTypeCountDeparturesArgs
    arrivals?: boolean | AirportCountOutputTypeCountArrivalsArgs
  }

  // Custom InputTypes
  /**
   * AirportCountOutputType without action
   */
  export type AirportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirportCountOutputType
     */
    select?: AirportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AirportCountOutputType without action
   */
  export type AirportCountOutputTypeCountDeparturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightWhereInput
  }

  /**
   * AirportCountOutputType without action
   */
  export type AirportCountOutputTypeCountArrivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightWhereInput
  }


  /**
   * Count Type FlightCountOutputType
   */

  export type FlightCountOutputType = {
    passengers: number
  }

  export type FlightCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passengers?: boolean | FlightCountOutputTypeCountPassengersArgs
  }

  // Custom InputTypes
  /**
   * FlightCountOutputType without action
   */
  export type FlightCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightCountOutputType
     */
    select?: FlightCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlightCountOutputType without action
   */
  export type FlightCountOutputTypeCountPassengersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassengerWhereInput
  }


  /**
   * Count Type PassengerCountOutputType
   */

  export type PassengerCountOutputType = {
    flights: number
  }

  export type PassengerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flights?: boolean | PassengerCountOutputTypeCountFlightsArgs
  }

  // Custom InputTypes
  /**
   * PassengerCountOutputType without action
   */
  export type PassengerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassengerCountOutputType
     */
    select?: PassengerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PassengerCountOutputType without action
   */
  export type PassengerCountOutputTypeCountFlightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Airport
   */

  export type AggregateAirport = {
    _count: AirportCountAggregateOutputType | null
    _avg: AirportAvgAggregateOutputType | null
    _sum: AirportSumAggregateOutputType | null
    _min: AirportMinAggregateOutputType | null
    _max: AirportMaxAggregateOutputType | null
  }

  export type AirportAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type AirportSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type AirportMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    city: string | null
    country: string | null
    timezone: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AirportMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    city: string | null
    country: string | null
    timezone: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AirportCountAggregateOutputType = {
    id: number
    code: number
    name: number
    city: number
    country: number
    timezone: number
    latitude: number
    longitude: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AirportAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type AirportSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type AirportMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    city?: true
    country?: true
    timezone?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AirportMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    city?: true
    country?: true
    timezone?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AirportCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    city?: true
    country?: true
    timezone?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AirportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airport to aggregate.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Airports
    **/
    _count?: true | AirportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AirportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AirportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AirportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AirportMaxAggregateInputType
  }

  export type GetAirportAggregateType<T extends AirportAggregateArgs> = {
        [P in keyof T & keyof AggregateAirport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAirport[P]>
      : GetScalarType<T[P], AggregateAirport[P]>
  }




  export type AirportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirportWhereInput
    orderBy?: AirportOrderByWithAggregationInput | AirportOrderByWithAggregationInput[]
    by: AirportScalarFieldEnum[] | AirportScalarFieldEnum
    having?: AirportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AirportCountAggregateInputType | true
    _avg?: AirportAvgAggregateInputType
    _sum?: AirportSumAggregateInputType
    _min?: AirportMinAggregateInputType
    _max?: AirportMaxAggregateInputType
  }

  export type AirportGroupByOutputType = {
    id: string
    code: string
    name: string
    city: string
    country: string
    timezone: string
    latitude: number
    longitude: number
    createdAt: Date
    updatedAt: Date
    _count: AirportCountAggregateOutputType | null
    _avg: AirportAvgAggregateOutputType | null
    _sum: AirportSumAggregateOutputType | null
    _min: AirportMinAggregateOutputType | null
    _max: AirportMaxAggregateOutputType | null
  }

  type GetAirportGroupByPayload<T extends AirportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AirportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AirportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AirportGroupByOutputType[P]>
            : GetScalarType<T[P], AirportGroupByOutputType[P]>
        }
      >
    >


  export type AirportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    city?: boolean
    country?: boolean
    timezone?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departures?: boolean | Airport$departuresArgs<ExtArgs>
    arrivals?: boolean | Airport$arrivalsArgs<ExtArgs>
    _count?: boolean | AirportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airport"]>

  export type AirportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    city?: boolean
    country?: boolean
    timezone?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["airport"]>

  export type AirportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    city?: boolean
    country?: boolean
    timezone?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["airport"]>

  export type AirportSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    city?: boolean
    country?: boolean
    timezone?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AirportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "city" | "country" | "timezone" | "latitude" | "longitude" | "createdAt" | "updatedAt", ExtArgs["result"]["airport"]>
  export type AirportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departures?: boolean | Airport$departuresArgs<ExtArgs>
    arrivals?: boolean | Airport$arrivalsArgs<ExtArgs>
    _count?: boolean | AirportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AirportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AirportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AirportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Airport"
    objects: {
      departures: Prisma.$FlightPayload<ExtArgs>[]
      arrivals: Prisma.$FlightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      city: string
      country: string
      timezone: string
      latitude: number
      longitude: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["airport"]>
    composites: {}
  }

  type AirportGetPayload<S extends boolean | null | undefined | AirportDefaultArgs> = $Result.GetResult<Prisma.$AirportPayload, S>

  type AirportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AirportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AirportCountAggregateInputType | true
    }

  export interface AirportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Airport'], meta: { name: 'Airport' } }
    /**
     * Find zero or one Airport that matches the filter.
     * @param {AirportFindUniqueArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AirportFindUniqueArgs>(args: SelectSubset<T, AirportFindUniqueArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Airport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AirportFindUniqueOrThrowArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AirportFindUniqueOrThrowArgs>(args: SelectSubset<T, AirportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportFindFirstArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AirportFindFirstArgs>(args?: SelectSubset<T, AirportFindFirstArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Airport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportFindFirstOrThrowArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AirportFindFirstOrThrowArgs>(args?: SelectSubset<T, AirportFindFirstOrThrowArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Airports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Airports
     * const airports = await prisma.airport.findMany()
     * 
     * // Get first 10 Airports
     * const airports = await prisma.airport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const airportWithIdOnly = await prisma.airport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AirportFindManyArgs>(args?: SelectSubset<T, AirportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Airport.
     * @param {AirportCreateArgs} args - Arguments to create a Airport.
     * @example
     * // Create one Airport
     * const Airport = await prisma.airport.create({
     *   data: {
     *     // ... data to create a Airport
     *   }
     * })
     * 
     */
    create<T extends AirportCreateArgs>(args: SelectSubset<T, AirportCreateArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Airports.
     * @param {AirportCreateManyArgs} args - Arguments to create many Airports.
     * @example
     * // Create many Airports
     * const airport = await prisma.airport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AirportCreateManyArgs>(args?: SelectSubset<T, AirportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Airports and returns the data saved in the database.
     * @param {AirportCreateManyAndReturnArgs} args - Arguments to create many Airports.
     * @example
     * // Create many Airports
     * const airport = await prisma.airport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Airports and only return the `id`
     * const airportWithIdOnly = await prisma.airport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AirportCreateManyAndReturnArgs>(args?: SelectSubset<T, AirportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Airport.
     * @param {AirportDeleteArgs} args - Arguments to delete one Airport.
     * @example
     * // Delete one Airport
     * const Airport = await prisma.airport.delete({
     *   where: {
     *     // ... filter to delete one Airport
     *   }
     * })
     * 
     */
    delete<T extends AirportDeleteArgs>(args: SelectSubset<T, AirportDeleteArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Airport.
     * @param {AirportUpdateArgs} args - Arguments to update one Airport.
     * @example
     * // Update one Airport
     * const airport = await prisma.airport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AirportUpdateArgs>(args: SelectSubset<T, AirportUpdateArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Airports.
     * @param {AirportDeleteManyArgs} args - Arguments to filter Airports to delete.
     * @example
     * // Delete a few Airports
     * const { count } = await prisma.airport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AirportDeleteManyArgs>(args?: SelectSubset<T, AirportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Airports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Airports
     * const airport = await prisma.airport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AirportUpdateManyArgs>(args: SelectSubset<T, AirportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Airports and returns the data updated in the database.
     * @param {AirportUpdateManyAndReturnArgs} args - Arguments to update many Airports.
     * @example
     * // Update many Airports
     * const airport = await prisma.airport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Airports and only return the `id`
     * const airportWithIdOnly = await prisma.airport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AirportUpdateManyAndReturnArgs>(args: SelectSubset<T, AirportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Airport.
     * @param {AirportUpsertArgs} args - Arguments to update or create a Airport.
     * @example
     * // Update or create a Airport
     * const airport = await prisma.airport.upsert({
     *   create: {
     *     // ... data to create a Airport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Airport we want to update
     *   }
     * })
     */
    upsert<T extends AirportUpsertArgs>(args: SelectSubset<T, AirportUpsertArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Airports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportCountArgs} args - Arguments to filter Airports to count.
     * @example
     * // Count the number of Airports
     * const count = await prisma.airport.count({
     *   where: {
     *     // ... the filter for the Airports we want to count
     *   }
     * })
    **/
    count<T extends AirportCountArgs>(
      args?: Subset<T, AirportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AirportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Airport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AirportAggregateArgs>(args: Subset<T, AirportAggregateArgs>): Prisma.PrismaPromise<GetAirportAggregateType<T>>

    /**
     * Group by Airport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AirportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AirportGroupByArgs['orderBy'] }
        : { orderBy?: AirportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AirportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAirportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Airport model
   */
  readonly fields: AirportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Airport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AirportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departures<T extends Airport$departuresArgs<ExtArgs> = {}>(args?: Subset<T, Airport$departuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    arrivals<T extends Airport$arrivalsArgs<ExtArgs> = {}>(args?: Subset<T, Airport$arrivalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Airport model
   */
  interface AirportFieldRefs {
    readonly id: FieldRef<"Airport", 'String'>
    readonly code: FieldRef<"Airport", 'String'>
    readonly name: FieldRef<"Airport", 'String'>
    readonly city: FieldRef<"Airport", 'String'>
    readonly country: FieldRef<"Airport", 'String'>
    readonly timezone: FieldRef<"Airport", 'String'>
    readonly latitude: FieldRef<"Airport", 'Float'>
    readonly longitude: FieldRef<"Airport", 'Float'>
    readonly createdAt: FieldRef<"Airport", 'DateTime'>
    readonly updatedAt: FieldRef<"Airport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Airport findUnique
   */
  export type AirportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport findUniqueOrThrow
   */
  export type AirportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport findFirst
   */
  export type AirportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airports.
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airports.
     */
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * Airport findFirstOrThrow
   */
  export type AirportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airports.
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airports.
     */
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * Airport findMany
   */
  export type AirportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airports to fetch.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Airports.
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * Airport create
   */
  export type AirportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * The data needed to create a Airport.
     */
    data: XOR<AirportCreateInput, AirportUncheckedCreateInput>
  }

  /**
   * Airport createMany
   */
  export type AirportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Airports.
     */
    data: AirportCreateManyInput | AirportCreateManyInput[]
  }

  /**
   * Airport createManyAndReturn
   */
  export type AirportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * The data used to create many Airports.
     */
    data: AirportCreateManyInput | AirportCreateManyInput[]
  }

  /**
   * Airport update
   */
  export type AirportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * The data needed to update a Airport.
     */
    data: XOR<AirportUpdateInput, AirportUncheckedUpdateInput>
    /**
     * Choose, which Airport to update.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport updateMany
   */
  export type AirportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Airports.
     */
    data: XOR<AirportUpdateManyMutationInput, AirportUncheckedUpdateManyInput>
    /**
     * Filter which Airports to update
     */
    where?: AirportWhereInput
    /**
     * Limit how many Airports to update.
     */
    limit?: number
  }

  /**
   * Airport updateManyAndReturn
   */
  export type AirportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * The data used to update Airports.
     */
    data: XOR<AirportUpdateManyMutationInput, AirportUncheckedUpdateManyInput>
    /**
     * Filter which Airports to update
     */
    where?: AirportWhereInput
    /**
     * Limit how many Airports to update.
     */
    limit?: number
  }

  /**
   * Airport upsert
   */
  export type AirportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * The filter to search for the Airport to update in case it exists.
     */
    where: AirportWhereUniqueInput
    /**
     * In case the Airport found by the `where` argument doesn't exist, create a new Airport with this data.
     */
    create: XOR<AirportCreateInput, AirportUncheckedCreateInput>
    /**
     * In case the Airport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AirportUpdateInput, AirportUncheckedUpdateInput>
  }

  /**
   * Airport delete
   */
  export type AirportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter which Airport to delete.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport deleteMany
   */
  export type AirportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airports to delete
     */
    where?: AirportWhereInput
    /**
     * Limit how many Airports to delete.
     */
    limit?: number
  }

  /**
   * Airport.departures
   */
  export type Airport$departuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    where?: FlightWhereInput
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    cursor?: FlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Airport.arrivals
   */
  export type Airport$arrivalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    where?: FlightWhereInput
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    cursor?: FlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Airport without action
   */
  export type AirportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Airport
     */
    omit?: AirportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
  }


  /**
   * Model Flight
   */

  export type AggregateFlight = {
    _count: FlightCountAggregateOutputType | null
    _avg: FlightAvgAggregateOutputType | null
    _sum: FlightSumAggregateOutputType | null
    _min: FlightMinAggregateOutputType | null
    _max: FlightMaxAggregateOutputType | null
  }

  export type FlightAvgAggregateOutputType = {
    duration: number | null
    price: number | null
    availableSeats: number | null
  }

  export type FlightSumAggregateOutputType = {
    duration: number | null
    price: number | null
    availableSeats: number | null
  }

  export type FlightMinAggregateOutputType = {
    id: string | null
    flightNumber: string | null
    departureTime: Date | null
    arrivalTime: Date | null
    duration: number | null
    price: number | null
    availableSeats: number | null
    status: $Enums.FlightStatus | null
    departureAirportId: string | null
    arrivalAirportId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlightMaxAggregateOutputType = {
    id: string | null
    flightNumber: string | null
    departureTime: Date | null
    arrivalTime: Date | null
    duration: number | null
    price: number | null
    availableSeats: number | null
    status: $Enums.FlightStatus | null
    departureAirportId: string | null
    arrivalAirportId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlightCountAggregateOutputType = {
    id: number
    flightNumber: number
    departureTime: number
    arrivalTime: number
    duration: number
    price: number
    availableSeats: number
    status: number
    departureAirportId: number
    arrivalAirportId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlightAvgAggregateInputType = {
    duration?: true
    price?: true
    availableSeats?: true
  }

  export type FlightSumAggregateInputType = {
    duration?: true
    price?: true
    availableSeats?: true
  }

  export type FlightMinAggregateInputType = {
    id?: true
    flightNumber?: true
    departureTime?: true
    arrivalTime?: true
    duration?: true
    price?: true
    availableSeats?: true
    status?: true
    departureAirportId?: true
    arrivalAirportId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlightMaxAggregateInputType = {
    id?: true
    flightNumber?: true
    departureTime?: true
    arrivalTime?: true
    duration?: true
    price?: true
    availableSeats?: true
    status?: true
    departureAirportId?: true
    arrivalAirportId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlightCountAggregateInputType = {
    id?: true
    flightNumber?: true
    departureTime?: true
    arrivalTime?: true
    duration?: true
    price?: true
    availableSeats?: true
    status?: true
    departureAirportId?: true
    arrivalAirportId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FlightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flight to aggregate.
     */
    where?: FlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flights
    **/
    _count?: true | FlightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlightMaxAggregateInputType
  }

  export type GetFlightAggregateType<T extends FlightAggregateArgs> = {
        [P in keyof T & keyof AggregateFlight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlight[P]>
      : GetScalarType<T[P], AggregateFlight[P]>
  }




  export type FlightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightWhereInput
    orderBy?: FlightOrderByWithAggregationInput | FlightOrderByWithAggregationInput[]
    by: FlightScalarFieldEnum[] | FlightScalarFieldEnum
    having?: FlightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlightCountAggregateInputType | true
    _avg?: FlightAvgAggregateInputType
    _sum?: FlightSumAggregateInputType
    _min?: FlightMinAggregateInputType
    _max?: FlightMaxAggregateInputType
  }

  export type FlightGroupByOutputType = {
    id: string
    flightNumber: string
    departureTime: Date
    arrivalTime: Date
    duration: number
    price: number
    availableSeats: number
    status: $Enums.FlightStatus
    departureAirportId: string
    arrivalAirportId: string
    createdAt: Date
    updatedAt: Date
    _count: FlightCountAggregateOutputType | null
    _avg: FlightAvgAggregateOutputType | null
    _sum: FlightSumAggregateOutputType | null
    _min: FlightMinAggregateOutputType | null
    _max: FlightMaxAggregateOutputType | null
  }

  type GetFlightGroupByPayload<T extends FlightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlightGroupByOutputType[P]>
            : GetScalarType<T[P], FlightGroupByOutputType[P]>
        }
      >
    >


  export type FlightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flightNumber?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    duration?: boolean
    price?: boolean
    availableSeats?: boolean
    status?: boolean
    departureAirportId?: boolean
    arrivalAirportId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departureAirport?: boolean | AirportDefaultArgs<ExtArgs>
    arrivalAirport?: boolean | AirportDefaultArgs<ExtArgs>
    passengers?: boolean | Flight$passengersArgs<ExtArgs>
    _count?: boolean | FlightCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flight"]>

  export type FlightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flightNumber?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    duration?: boolean
    price?: boolean
    availableSeats?: boolean
    status?: boolean
    departureAirportId?: boolean
    arrivalAirportId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departureAirport?: boolean | AirportDefaultArgs<ExtArgs>
    arrivalAirport?: boolean | AirportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flight"]>

  export type FlightSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flightNumber?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    duration?: boolean
    price?: boolean
    availableSeats?: boolean
    status?: boolean
    departureAirportId?: boolean
    arrivalAirportId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    departureAirport?: boolean | AirportDefaultArgs<ExtArgs>
    arrivalAirport?: boolean | AirportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flight"]>

  export type FlightSelectScalar = {
    id?: boolean
    flightNumber?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    duration?: boolean
    price?: boolean
    availableSeats?: boolean
    status?: boolean
    departureAirportId?: boolean
    arrivalAirportId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FlightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "flightNumber" | "departureTime" | "arrivalTime" | "duration" | "price" | "availableSeats" | "status" | "departureAirportId" | "arrivalAirportId" | "createdAt" | "updatedAt", ExtArgs["result"]["flight"]>
  export type FlightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departureAirport?: boolean | AirportDefaultArgs<ExtArgs>
    arrivalAirport?: boolean | AirportDefaultArgs<ExtArgs>
    passengers?: boolean | Flight$passengersArgs<ExtArgs>
    _count?: boolean | FlightCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departureAirport?: boolean | AirportDefaultArgs<ExtArgs>
    arrivalAirport?: boolean | AirportDefaultArgs<ExtArgs>
  }
  export type FlightIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departureAirport?: boolean | AirportDefaultArgs<ExtArgs>
    arrivalAirport?: boolean | AirportDefaultArgs<ExtArgs>
  }

  export type $FlightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flight"
    objects: {
      departureAirport: Prisma.$AirportPayload<ExtArgs>
      arrivalAirport: Prisma.$AirportPayload<ExtArgs>
      passengers: Prisma.$PassengerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      flightNumber: string
      departureTime: Date
      arrivalTime: Date
      duration: number
      price: number
      availableSeats: number
      status: $Enums.FlightStatus
      departureAirportId: string
      arrivalAirportId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["flight"]>
    composites: {}
  }

  type FlightGetPayload<S extends boolean | null | undefined | FlightDefaultArgs> = $Result.GetResult<Prisma.$FlightPayload, S>

  type FlightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlightCountAggregateInputType | true
    }

  export interface FlightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flight'], meta: { name: 'Flight' } }
    /**
     * Find zero or one Flight that matches the filter.
     * @param {FlightFindUniqueArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlightFindUniqueArgs>(args: SelectSubset<T, FlightFindUniqueArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlightFindUniqueOrThrowArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlightFindUniqueOrThrowArgs>(args: SelectSubset<T, FlightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightFindFirstArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlightFindFirstArgs>(args?: SelectSubset<T, FlightFindFirstArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightFindFirstOrThrowArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlightFindFirstOrThrowArgs>(args?: SelectSubset<T, FlightFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flights
     * const flights = await prisma.flight.findMany()
     * 
     * // Get first 10 Flights
     * const flights = await prisma.flight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flightWithIdOnly = await prisma.flight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlightFindManyArgs>(args?: SelectSubset<T, FlightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flight.
     * @param {FlightCreateArgs} args - Arguments to create a Flight.
     * @example
     * // Create one Flight
     * const Flight = await prisma.flight.create({
     *   data: {
     *     // ... data to create a Flight
     *   }
     * })
     * 
     */
    create<T extends FlightCreateArgs>(args: SelectSubset<T, FlightCreateArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flights.
     * @param {FlightCreateManyArgs} args - Arguments to create many Flights.
     * @example
     * // Create many Flights
     * const flight = await prisma.flight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlightCreateManyArgs>(args?: SelectSubset<T, FlightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flights and returns the data saved in the database.
     * @param {FlightCreateManyAndReturnArgs} args - Arguments to create many Flights.
     * @example
     * // Create many Flights
     * const flight = await prisma.flight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flights and only return the `id`
     * const flightWithIdOnly = await prisma.flight.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlightCreateManyAndReturnArgs>(args?: SelectSubset<T, FlightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flight.
     * @param {FlightDeleteArgs} args - Arguments to delete one Flight.
     * @example
     * // Delete one Flight
     * const Flight = await prisma.flight.delete({
     *   where: {
     *     // ... filter to delete one Flight
     *   }
     * })
     * 
     */
    delete<T extends FlightDeleteArgs>(args: SelectSubset<T, FlightDeleteArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flight.
     * @param {FlightUpdateArgs} args - Arguments to update one Flight.
     * @example
     * // Update one Flight
     * const flight = await prisma.flight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlightUpdateArgs>(args: SelectSubset<T, FlightUpdateArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flights.
     * @param {FlightDeleteManyArgs} args - Arguments to filter Flights to delete.
     * @example
     * // Delete a few Flights
     * const { count } = await prisma.flight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlightDeleteManyArgs>(args?: SelectSubset<T, FlightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flights
     * const flight = await prisma.flight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlightUpdateManyArgs>(args: SelectSubset<T, FlightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flights and returns the data updated in the database.
     * @param {FlightUpdateManyAndReturnArgs} args - Arguments to update many Flights.
     * @example
     * // Update many Flights
     * const flight = await prisma.flight.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flights and only return the `id`
     * const flightWithIdOnly = await prisma.flight.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FlightUpdateManyAndReturnArgs>(args: SelectSubset<T, FlightUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flight.
     * @param {FlightUpsertArgs} args - Arguments to update or create a Flight.
     * @example
     * // Update or create a Flight
     * const flight = await prisma.flight.upsert({
     *   create: {
     *     // ... data to create a Flight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flight we want to update
     *   }
     * })
     */
    upsert<T extends FlightUpsertArgs>(args: SelectSubset<T, FlightUpsertArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightCountArgs} args - Arguments to filter Flights to count.
     * @example
     * // Count the number of Flights
     * const count = await prisma.flight.count({
     *   where: {
     *     // ... the filter for the Flights we want to count
     *   }
     * })
    **/
    count<T extends FlightCountArgs>(
      args?: Subset<T, FlightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlightAggregateArgs>(args: Subset<T, FlightAggregateArgs>): Prisma.PrismaPromise<GetFlightAggregateType<T>>

    /**
     * Group by Flight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlightGroupByArgs['orderBy'] }
        : { orderBy?: FlightGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flight model
   */
  readonly fields: FlightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departureAirport<T extends AirportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AirportDefaultArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    arrivalAirport<T extends AirportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AirportDefaultArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    passengers<T extends Flight$passengersArgs<ExtArgs> = {}>(args?: Subset<T, Flight$passengersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Flight model
   */
  interface FlightFieldRefs {
    readonly id: FieldRef<"Flight", 'String'>
    readonly flightNumber: FieldRef<"Flight", 'String'>
    readonly departureTime: FieldRef<"Flight", 'DateTime'>
    readonly arrivalTime: FieldRef<"Flight", 'DateTime'>
    readonly duration: FieldRef<"Flight", 'Int'>
    readonly price: FieldRef<"Flight", 'Float'>
    readonly availableSeats: FieldRef<"Flight", 'Int'>
    readonly status: FieldRef<"Flight", 'FlightStatus'>
    readonly departureAirportId: FieldRef<"Flight", 'String'>
    readonly arrivalAirportId: FieldRef<"Flight", 'String'>
    readonly createdAt: FieldRef<"Flight", 'DateTime'>
    readonly updatedAt: FieldRef<"Flight", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Flight findUnique
   */
  export type FlightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flight to fetch.
     */
    where: FlightWhereUniqueInput
  }

  /**
   * Flight findUniqueOrThrow
   */
  export type FlightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flight to fetch.
     */
    where: FlightWhereUniqueInput
  }

  /**
   * Flight findFirst
   */
  export type FlightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flight to fetch.
     */
    where?: FlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flights.
     */
    cursor?: FlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flights.
     */
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Flight findFirstOrThrow
   */
  export type FlightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flight to fetch.
     */
    where?: FlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flights.
     */
    cursor?: FlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flights.
     */
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Flight findMany
   */
  export type FlightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flights to fetch.
     */
    where?: FlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flights.
     */
    cursor?: FlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Flight create
   */
  export type FlightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * The data needed to create a Flight.
     */
    data: XOR<FlightCreateInput, FlightUncheckedCreateInput>
  }

  /**
   * Flight createMany
   */
  export type FlightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flights.
     */
    data: FlightCreateManyInput | FlightCreateManyInput[]
  }

  /**
   * Flight createManyAndReturn
   */
  export type FlightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * The data used to create many Flights.
     */
    data: FlightCreateManyInput | FlightCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flight update
   */
  export type FlightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * The data needed to update a Flight.
     */
    data: XOR<FlightUpdateInput, FlightUncheckedUpdateInput>
    /**
     * Choose, which Flight to update.
     */
    where: FlightWhereUniqueInput
  }

  /**
   * Flight updateMany
   */
  export type FlightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flights.
     */
    data: XOR<FlightUpdateManyMutationInput, FlightUncheckedUpdateManyInput>
    /**
     * Filter which Flights to update
     */
    where?: FlightWhereInput
    /**
     * Limit how many Flights to update.
     */
    limit?: number
  }

  /**
   * Flight updateManyAndReturn
   */
  export type FlightUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * The data used to update Flights.
     */
    data: XOR<FlightUpdateManyMutationInput, FlightUncheckedUpdateManyInput>
    /**
     * Filter which Flights to update
     */
    where?: FlightWhereInput
    /**
     * Limit how many Flights to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flight upsert
   */
  export type FlightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * The filter to search for the Flight to update in case it exists.
     */
    where: FlightWhereUniqueInput
    /**
     * In case the Flight found by the `where` argument doesn't exist, create a new Flight with this data.
     */
    create: XOR<FlightCreateInput, FlightUncheckedCreateInput>
    /**
     * In case the Flight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlightUpdateInput, FlightUncheckedUpdateInput>
  }

  /**
   * Flight delete
   */
  export type FlightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter which Flight to delete.
     */
    where: FlightWhereUniqueInput
  }

  /**
   * Flight deleteMany
   */
  export type FlightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flights to delete
     */
    where?: FlightWhereInput
    /**
     * Limit how many Flights to delete.
     */
    limit?: number
  }

  /**
   * Flight.passengers
   */
  export type Flight$passengersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    where?: PassengerWhereInput
    orderBy?: PassengerOrderByWithRelationInput | PassengerOrderByWithRelationInput[]
    cursor?: PassengerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PassengerScalarFieldEnum | PassengerScalarFieldEnum[]
  }

  /**
   * Flight without action
   */
  export type FlightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
  }


  /**
   * Model Passenger
   */

  export type AggregatePassenger = {
    _count: PassengerCountAggregateOutputType | null
    _min: PassengerMinAggregateOutputType | null
    _max: PassengerMaxAggregateOutputType | null
  }

  export type PassengerMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    dateOfBirth: Date | null
    passportNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PassengerMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    dateOfBirth: Date | null
    passportNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PassengerCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    dateOfBirth: number
    passportNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PassengerMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    passportNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PassengerMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    passportNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PassengerCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    passportNumber?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PassengerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passenger to aggregate.
     */
    where?: PassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passengers to fetch.
     */
    orderBy?: PassengerOrderByWithRelationInput | PassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passengers
    **/
    _count?: true | PassengerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PassengerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PassengerMaxAggregateInputType
  }

  export type GetPassengerAggregateType<T extends PassengerAggregateArgs> = {
        [P in keyof T & keyof AggregatePassenger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassenger[P]>
      : GetScalarType<T[P], AggregatePassenger[P]>
  }




  export type PassengerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassengerWhereInput
    orderBy?: PassengerOrderByWithAggregationInput | PassengerOrderByWithAggregationInput[]
    by: PassengerScalarFieldEnum[] | PassengerScalarFieldEnum
    having?: PassengerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PassengerCountAggregateInputType | true
    _min?: PassengerMinAggregateInputType
    _max?: PassengerMaxAggregateInputType
  }

  export type PassengerGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string | null
    dateOfBirth: Date
    passportNumber: string | null
    createdAt: Date
    updatedAt: Date
    _count: PassengerCountAggregateOutputType | null
    _min: PassengerMinAggregateOutputType | null
    _max: PassengerMaxAggregateOutputType | null
  }

  type GetPassengerGroupByPayload<T extends PassengerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PassengerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PassengerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PassengerGroupByOutputType[P]>
            : GetScalarType<T[P], PassengerGroupByOutputType[P]>
        }
      >
    >


  export type PassengerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    passportNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flights?: boolean | Passenger$flightsArgs<ExtArgs>
    _count?: boolean | PassengerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passenger"]>

  export type PassengerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    passportNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["passenger"]>

  export type PassengerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    passportNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["passenger"]>

  export type PassengerSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    passportNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PassengerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "dateOfBirth" | "passportNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["passenger"]>
  export type PassengerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flights?: boolean | Passenger$flightsArgs<ExtArgs>
    _count?: boolean | PassengerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PassengerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PassengerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PassengerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Passenger"
    objects: {
      flights: Prisma.$FlightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      phone: string | null
      dateOfBirth: Date
      passportNumber: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["passenger"]>
    composites: {}
  }

  type PassengerGetPayload<S extends boolean | null | undefined | PassengerDefaultArgs> = $Result.GetResult<Prisma.$PassengerPayload, S>

  type PassengerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PassengerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PassengerCountAggregateInputType | true
    }

  export interface PassengerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Passenger'], meta: { name: 'Passenger' } }
    /**
     * Find zero or one Passenger that matches the filter.
     * @param {PassengerFindUniqueArgs} args - Arguments to find a Passenger
     * @example
     * // Get one Passenger
     * const passenger = await prisma.passenger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PassengerFindUniqueArgs>(args: SelectSubset<T, PassengerFindUniqueArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Passenger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PassengerFindUniqueOrThrowArgs} args - Arguments to find a Passenger
     * @example
     * // Get one Passenger
     * const passenger = await prisma.passenger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PassengerFindUniqueOrThrowArgs>(args: SelectSubset<T, PassengerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passenger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerFindFirstArgs} args - Arguments to find a Passenger
     * @example
     * // Get one Passenger
     * const passenger = await prisma.passenger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PassengerFindFirstArgs>(args?: SelectSubset<T, PassengerFindFirstArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passenger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerFindFirstOrThrowArgs} args - Arguments to find a Passenger
     * @example
     * // Get one Passenger
     * const passenger = await prisma.passenger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PassengerFindFirstOrThrowArgs>(args?: SelectSubset<T, PassengerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passengers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passengers
     * const passengers = await prisma.passenger.findMany()
     * 
     * // Get first 10 Passengers
     * const passengers = await prisma.passenger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passengerWithIdOnly = await prisma.passenger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PassengerFindManyArgs>(args?: SelectSubset<T, PassengerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Passenger.
     * @param {PassengerCreateArgs} args - Arguments to create a Passenger.
     * @example
     * // Create one Passenger
     * const Passenger = await prisma.passenger.create({
     *   data: {
     *     // ... data to create a Passenger
     *   }
     * })
     * 
     */
    create<T extends PassengerCreateArgs>(args: SelectSubset<T, PassengerCreateArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passengers.
     * @param {PassengerCreateManyArgs} args - Arguments to create many Passengers.
     * @example
     * // Create many Passengers
     * const passenger = await prisma.passenger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PassengerCreateManyArgs>(args?: SelectSubset<T, PassengerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Passengers and returns the data saved in the database.
     * @param {PassengerCreateManyAndReturnArgs} args - Arguments to create many Passengers.
     * @example
     * // Create many Passengers
     * const passenger = await prisma.passenger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Passengers and only return the `id`
     * const passengerWithIdOnly = await prisma.passenger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PassengerCreateManyAndReturnArgs>(args?: SelectSubset<T, PassengerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Passenger.
     * @param {PassengerDeleteArgs} args - Arguments to delete one Passenger.
     * @example
     * // Delete one Passenger
     * const Passenger = await prisma.passenger.delete({
     *   where: {
     *     // ... filter to delete one Passenger
     *   }
     * })
     * 
     */
    delete<T extends PassengerDeleteArgs>(args: SelectSubset<T, PassengerDeleteArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Passenger.
     * @param {PassengerUpdateArgs} args - Arguments to update one Passenger.
     * @example
     * // Update one Passenger
     * const passenger = await prisma.passenger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PassengerUpdateArgs>(args: SelectSubset<T, PassengerUpdateArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passengers.
     * @param {PassengerDeleteManyArgs} args - Arguments to filter Passengers to delete.
     * @example
     * // Delete a few Passengers
     * const { count } = await prisma.passenger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PassengerDeleteManyArgs>(args?: SelectSubset<T, PassengerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passengers
     * const passenger = await prisma.passenger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PassengerUpdateManyArgs>(args: SelectSubset<T, PassengerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passengers and returns the data updated in the database.
     * @param {PassengerUpdateManyAndReturnArgs} args - Arguments to update many Passengers.
     * @example
     * // Update many Passengers
     * const passenger = await prisma.passenger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Passengers and only return the `id`
     * const passengerWithIdOnly = await prisma.passenger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PassengerUpdateManyAndReturnArgs>(args: SelectSubset<T, PassengerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Passenger.
     * @param {PassengerUpsertArgs} args - Arguments to update or create a Passenger.
     * @example
     * // Update or create a Passenger
     * const passenger = await prisma.passenger.upsert({
     *   create: {
     *     // ... data to create a Passenger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passenger we want to update
     *   }
     * })
     */
    upsert<T extends PassengerUpsertArgs>(args: SelectSubset<T, PassengerUpsertArgs<ExtArgs>>): Prisma__PassengerClient<$Result.GetResult<Prisma.$PassengerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerCountArgs} args - Arguments to filter Passengers to count.
     * @example
     * // Count the number of Passengers
     * const count = await prisma.passenger.count({
     *   where: {
     *     // ... the filter for the Passengers we want to count
     *   }
     * })
    **/
    count<T extends PassengerCountArgs>(
      args?: Subset<T, PassengerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PassengerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PassengerAggregateArgs>(args: Subset<T, PassengerAggregateArgs>): Prisma.PrismaPromise<GetPassengerAggregateType<T>>

    /**
     * Group by Passenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PassengerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PassengerGroupByArgs['orderBy'] }
        : { orderBy?: PassengerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PassengerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassengerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Passenger model
   */
  readonly fields: PassengerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Passenger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PassengerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flights<T extends Passenger$flightsArgs<ExtArgs> = {}>(args?: Subset<T, Passenger$flightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Passenger model
   */
  interface PassengerFieldRefs {
    readonly id: FieldRef<"Passenger", 'String'>
    readonly firstName: FieldRef<"Passenger", 'String'>
    readonly lastName: FieldRef<"Passenger", 'String'>
    readonly email: FieldRef<"Passenger", 'String'>
    readonly phone: FieldRef<"Passenger", 'String'>
    readonly dateOfBirth: FieldRef<"Passenger", 'DateTime'>
    readonly passportNumber: FieldRef<"Passenger", 'String'>
    readonly createdAt: FieldRef<"Passenger", 'DateTime'>
    readonly updatedAt: FieldRef<"Passenger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Passenger findUnique
   */
  export type PassengerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passenger to fetch.
     */
    where: PassengerWhereUniqueInput
  }

  /**
   * Passenger findUniqueOrThrow
   */
  export type PassengerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passenger to fetch.
     */
    where: PassengerWhereUniqueInput
  }

  /**
   * Passenger findFirst
   */
  export type PassengerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passenger to fetch.
     */
    where?: PassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passengers to fetch.
     */
    orderBy?: PassengerOrderByWithRelationInput | PassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passengers.
     */
    cursor?: PassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passengers.
     */
    distinct?: PassengerScalarFieldEnum | PassengerScalarFieldEnum[]
  }

  /**
   * Passenger findFirstOrThrow
   */
  export type PassengerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passenger to fetch.
     */
    where?: PassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passengers to fetch.
     */
    orderBy?: PassengerOrderByWithRelationInput | PassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passengers.
     */
    cursor?: PassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passengers.
     */
    distinct?: PassengerScalarFieldEnum | PassengerScalarFieldEnum[]
  }

  /**
   * Passenger findMany
   */
  export type PassengerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter, which Passengers to fetch.
     */
    where?: PassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passengers to fetch.
     */
    orderBy?: PassengerOrderByWithRelationInput | PassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passengers.
     */
    cursor?: PassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passengers.
     */
    skip?: number
    distinct?: PassengerScalarFieldEnum | PassengerScalarFieldEnum[]
  }

  /**
   * Passenger create
   */
  export type PassengerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * The data needed to create a Passenger.
     */
    data: XOR<PassengerCreateInput, PassengerUncheckedCreateInput>
  }

  /**
   * Passenger createMany
   */
  export type PassengerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Passengers.
     */
    data: PassengerCreateManyInput | PassengerCreateManyInput[]
  }

  /**
   * Passenger createManyAndReturn
   */
  export type PassengerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * The data used to create many Passengers.
     */
    data: PassengerCreateManyInput | PassengerCreateManyInput[]
  }

  /**
   * Passenger update
   */
  export type PassengerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * The data needed to update a Passenger.
     */
    data: XOR<PassengerUpdateInput, PassengerUncheckedUpdateInput>
    /**
     * Choose, which Passenger to update.
     */
    where: PassengerWhereUniqueInput
  }

  /**
   * Passenger updateMany
   */
  export type PassengerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passengers.
     */
    data: XOR<PassengerUpdateManyMutationInput, PassengerUncheckedUpdateManyInput>
    /**
     * Filter which Passengers to update
     */
    where?: PassengerWhereInput
    /**
     * Limit how many Passengers to update.
     */
    limit?: number
  }

  /**
   * Passenger updateManyAndReturn
   */
  export type PassengerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * The data used to update Passengers.
     */
    data: XOR<PassengerUpdateManyMutationInput, PassengerUncheckedUpdateManyInput>
    /**
     * Filter which Passengers to update
     */
    where?: PassengerWhereInput
    /**
     * Limit how many Passengers to update.
     */
    limit?: number
  }

  /**
   * Passenger upsert
   */
  export type PassengerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * The filter to search for the Passenger to update in case it exists.
     */
    where: PassengerWhereUniqueInput
    /**
     * In case the Passenger found by the `where` argument doesn't exist, create a new Passenger with this data.
     */
    create: XOR<PassengerCreateInput, PassengerUncheckedCreateInput>
    /**
     * In case the Passenger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PassengerUpdateInput, PassengerUncheckedUpdateInput>
  }

  /**
   * Passenger delete
   */
  export type PassengerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
    /**
     * Filter which Passenger to delete.
     */
    where: PassengerWhereUniqueInput
  }

  /**
   * Passenger deleteMany
   */
  export type PassengerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passengers to delete
     */
    where?: PassengerWhereInput
    /**
     * Limit how many Passengers to delete.
     */
    limit?: number
  }

  /**
   * Passenger.flights
   */
  export type Passenger$flightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flight
     */
    omit?: FlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    where?: FlightWhereInput
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    cursor?: FlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Passenger without action
   */
  export type PassengerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passenger
     */
    select?: PassengerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passenger
     */
    omit?: PassengerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AirportScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    city: 'city',
    country: 'country',
    timezone: 'timezone',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AirportScalarFieldEnum = (typeof AirportScalarFieldEnum)[keyof typeof AirportScalarFieldEnum]


  export const FlightScalarFieldEnum: {
    id: 'id',
    flightNumber: 'flightNumber',
    departureTime: 'departureTime',
    arrivalTime: 'arrivalTime',
    duration: 'duration',
    price: 'price',
    availableSeats: 'availableSeats',
    status: 'status',
    departureAirportId: 'departureAirportId',
    arrivalAirportId: 'arrivalAirportId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlightScalarFieldEnum = (typeof FlightScalarFieldEnum)[keyof typeof FlightScalarFieldEnum]


  export const PassengerScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    dateOfBirth: 'dateOfBirth',
    passportNumber: 'passportNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PassengerScalarFieldEnum = (typeof PassengerScalarFieldEnum)[keyof typeof PassengerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'FlightStatus'
   */
  export type EnumFlightStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlightStatus'>
    
  /**
   * Deep Input Types
   */


  export type AirportWhereInput = {
    AND?: AirportWhereInput | AirportWhereInput[]
    OR?: AirportWhereInput[]
    NOT?: AirportWhereInput | AirportWhereInput[]
    id?: StringFilter<"Airport"> | string
    code?: StringFilter<"Airport"> | string
    name?: StringFilter<"Airport"> | string
    city?: StringFilter<"Airport"> | string
    country?: StringFilter<"Airport"> | string
    timezone?: StringFilter<"Airport"> | string
    latitude?: FloatFilter<"Airport"> | number
    longitude?: FloatFilter<"Airport"> | number
    createdAt?: DateTimeFilter<"Airport"> | Date | string
    updatedAt?: DateTimeFilter<"Airport"> | Date | string
    departures?: FlightListRelationFilter
    arrivals?: FlightListRelationFilter
  }

  export type AirportOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    city?: SortOrder
    country?: SortOrder
    timezone?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departures?: FlightOrderByRelationAggregateInput
    arrivals?: FlightOrderByRelationAggregateInput
  }

  export type AirportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: AirportWhereInput | AirportWhereInput[]
    OR?: AirportWhereInput[]
    NOT?: AirportWhereInput | AirportWhereInput[]
    name?: StringFilter<"Airport"> | string
    city?: StringFilter<"Airport"> | string
    country?: StringFilter<"Airport"> | string
    timezone?: StringFilter<"Airport"> | string
    latitude?: FloatFilter<"Airport"> | number
    longitude?: FloatFilter<"Airport"> | number
    createdAt?: DateTimeFilter<"Airport"> | Date | string
    updatedAt?: DateTimeFilter<"Airport"> | Date | string
    departures?: FlightListRelationFilter
    arrivals?: FlightListRelationFilter
  }, "id" | "code">

  export type AirportOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    city?: SortOrder
    country?: SortOrder
    timezone?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AirportCountOrderByAggregateInput
    _avg?: AirportAvgOrderByAggregateInput
    _max?: AirportMaxOrderByAggregateInput
    _min?: AirportMinOrderByAggregateInput
    _sum?: AirportSumOrderByAggregateInput
  }

  export type AirportScalarWhereWithAggregatesInput = {
    AND?: AirportScalarWhereWithAggregatesInput | AirportScalarWhereWithAggregatesInput[]
    OR?: AirportScalarWhereWithAggregatesInput[]
    NOT?: AirportScalarWhereWithAggregatesInput | AirportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Airport"> | string
    code?: StringWithAggregatesFilter<"Airport"> | string
    name?: StringWithAggregatesFilter<"Airport"> | string
    city?: StringWithAggregatesFilter<"Airport"> | string
    country?: StringWithAggregatesFilter<"Airport"> | string
    timezone?: StringWithAggregatesFilter<"Airport"> | string
    latitude?: FloatWithAggregatesFilter<"Airport"> | number
    longitude?: FloatWithAggregatesFilter<"Airport"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Airport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Airport"> | Date | string
  }

  export type FlightWhereInput = {
    AND?: FlightWhereInput | FlightWhereInput[]
    OR?: FlightWhereInput[]
    NOT?: FlightWhereInput | FlightWhereInput[]
    id?: StringFilter<"Flight"> | string
    flightNumber?: StringFilter<"Flight"> | string
    departureTime?: DateTimeFilter<"Flight"> | Date | string
    arrivalTime?: DateTimeFilter<"Flight"> | Date | string
    duration?: IntFilter<"Flight"> | number
    price?: FloatFilter<"Flight"> | number
    availableSeats?: IntFilter<"Flight"> | number
    status?: EnumFlightStatusFilter<"Flight"> | $Enums.FlightStatus
    departureAirportId?: StringFilter<"Flight"> | string
    arrivalAirportId?: StringFilter<"Flight"> | string
    createdAt?: DateTimeFilter<"Flight"> | Date | string
    updatedAt?: DateTimeFilter<"Flight"> | Date | string
    departureAirport?: XOR<AirportScalarRelationFilter, AirportWhereInput>
    arrivalAirport?: XOR<AirportScalarRelationFilter, AirportWhereInput>
    passengers?: PassengerListRelationFilter
  }

  export type FlightOrderByWithRelationInput = {
    id?: SortOrder
    flightNumber?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    availableSeats?: SortOrder
    status?: SortOrder
    departureAirportId?: SortOrder
    arrivalAirportId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    departureAirport?: AirportOrderByWithRelationInput
    arrivalAirport?: AirportOrderByWithRelationInput
    passengers?: PassengerOrderByRelationAggregateInput
  }

  export type FlightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FlightWhereInput | FlightWhereInput[]
    OR?: FlightWhereInput[]
    NOT?: FlightWhereInput | FlightWhereInput[]
    flightNumber?: StringFilter<"Flight"> | string
    departureTime?: DateTimeFilter<"Flight"> | Date | string
    arrivalTime?: DateTimeFilter<"Flight"> | Date | string
    duration?: IntFilter<"Flight"> | number
    price?: FloatFilter<"Flight"> | number
    availableSeats?: IntFilter<"Flight"> | number
    status?: EnumFlightStatusFilter<"Flight"> | $Enums.FlightStatus
    departureAirportId?: StringFilter<"Flight"> | string
    arrivalAirportId?: StringFilter<"Flight"> | string
    createdAt?: DateTimeFilter<"Flight"> | Date | string
    updatedAt?: DateTimeFilter<"Flight"> | Date | string
    departureAirport?: XOR<AirportScalarRelationFilter, AirportWhereInput>
    arrivalAirport?: XOR<AirportScalarRelationFilter, AirportWhereInput>
    passengers?: PassengerListRelationFilter
  }, "id">

  export type FlightOrderByWithAggregationInput = {
    id?: SortOrder
    flightNumber?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    availableSeats?: SortOrder
    status?: SortOrder
    departureAirportId?: SortOrder
    arrivalAirportId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FlightCountOrderByAggregateInput
    _avg?: FlightAvgOrderByAggregateInput
    _max?: FlightMaxOrderByAggregateInput
    _min?: FlightMinOrderByAggregateInput
    _sum?: FlightSumOrderByAggregateInput
  }

  export type FlightScalarWhereWithAggregatesInput = {
    AND?: FlightScalarWhereWithAggregatesInput | FlightScalarWhereWithAggregatesInput[]
    OR?: FlightScalarWhereWithAggregatesInput[]
    NOT?: FlightScalarWhereWithAggregatesInput | FlightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Flight"> | string
    flightNumber?: StringWithAggregatesFilter<"Flight"> | string
    departureTime?: DateTimeWithAggregatesFilter<"Flight"> | Date | string
    arrivalTime?: DateTimeWithAggregatesFilter<"Flight"> | Date | string
    duration?: IntWithAggregatesFilter<"Flight"> | number
    price?: FloatWithAggregatesFilter<"Flight"> | number
    availableSeats?: IntWithAggregatesFilter<"Flight"> | number
    status?: EnumFlightStatusWithAggregatesFilter<"Flight"> | $Enums.FlightStatus
    departureAirportId?: StringWithAggregatesFilter<"Flight"> | string
    arrivalAirportId?: StringWithAggregatesFilter<"Flight"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Flight"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Flight"> | Date | string
  }

  export type PassengerWhereInput = {
    AND?: PassengerWhereInput | PassengerWhereInput[]
    OR?: PassengerWhereInput[]
    NOT?: PassengerWhereInput | PassengerWhereInput[]
    id?: StringFilter<"Passenger"> | string
    firstName?: StringFilter<"Passenger"> | string
    lastName?: StringFilter<"Passenger"> | string
    email?: StringFilter<"Passenger"> | string
    phone?: StringNullableFilter<"Passenger"> | string | null
    dateOfBirth?: DateTimeFilter<"Passenger"> | Date | string
    passportNumber?: StringNullableFilter<"Passenger"> | string | null
    createdAt?: DateTimeFilter<"Passenger"> | Date | string
    updatedAt?: DateTimeFilter<"Passenger"> | Date | string
    flights?: FlightListRelationFilter
  }

  export type PassengerOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrder
    passportNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flights?: FlightOrderByRelationAggregateInput
  }

  export type PassengerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PassengerWhereInput | PassengerWhereInput[]
    OR?: PassengerWhereInput[]
    NOT?: PassengerWhereInput | PassengerWhereInput[]
    firstName?: StringFilter<"Passenger"> | string
    lastName?: StringFilter<"Passenger"> | string
    phone?: StringNullableFilter<"Passenger"> | string | null
    dateOfBirth?: DateTimeFilter<"Passenger"> | Date | string
    passportNumber?: StringNullableFilter<"Passenger"> | string | null
    createdAt?: DateTimeFilter<"Passenger"> | Date | string
    updatedAt?: DateTimeFilter<"Passenger"> | Date | string
    flights?: FlightListRelationFilter
  }, "id" | "email">

  export type PassengerOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrder
    passportNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PassengerCountOrderByAggregateInput
    _max?: PassengerMaxOrderByAggregateInput
    _min?: PassengerMinOrderByAggregateInput
  }

  export type PassengerScalarWhereWithAggregatesInput = {
    AND?: PassengerScalarWhereWithAggregatesInput | PassengerScalarWhereWithAggregatesInput[]
    OR?: PassengerScalarWhereWithAggregatesInput[]
    NOT?: PassengerScalarWhereWithAggregatesInput | PassengerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Passenger"> | string
    firstName?: StringWithAggregatesFilter<"Passenger"> | string
    lastName?: StringWithAggregatesFilter<"Passenger"> | string
    email?: StringWithAggregatesFilter<"Passenger"> | string
    phone?: StringNullableWithAggregatesFilter<"Passenger"> | string | null
    dateOfBirth?: DateTimeWithAggregatesFilter<"Passenger"> | Date | string
    passportNumber?: StringNullableWithAggregatesFilter<"Passenger"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Passenger"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Passenger"> | Date | string
  }

  export type AirportCreateInput = {
    id?: string
    code: string
    name: string
    city: string
    country: string
    timezone: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    departures?: FlightCreateNestedManyWithoutDepartureAirportInput
    arrivals?: FlightCreateNestedManyWithoutArrivalAirportInput
  }

  export type AirportUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    city: string
    country: string
    timezone: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    departures?: FlightUncheckedCreateNestedManyWithoutDepartureAirportInput
    arrivals?: FlightUncheckedCreateNestedManyWithoutArrivalAirportInput
  }

  export type AirportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departures?: FlightUpdateManyWithoutDepartureAirportNestedInput
    arrivals?: FlightUpdateManyWithoutArrivalAirportNestedInput
  }

  export type AirportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departures?: FlightUncheckedUpdateManyWithoutDepartureAirportNestedInput
    arrivals?: FlightUncheckedUpdateManyWithoutArrivalAirportNestedInput
  }

  export type AirportCreateManyInput = {
    id?: string
    code: string
    name: string
    city: string
    country: string
    timezone: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AirportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AirportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightCreateInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    duration: number
    price: number
    availableSeats: number
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    departureAirport: AirportCreateNestedOneWithoutDeparturesInput
    arrivalAirport: AirportCreateNestedOneWithoutArrivalsInput
    passengers?: PassengerCreateNestedManyWithoutFlightsInput
  }

  export type FlightUncheckedCreateInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    duration: number
    price: number
    availableSeats: number
    status?: $Enums.FlightStatus
    departureAirportId: string
    arrivalAirportId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passengers?: PassengerUncheckedCreateNestedManyWithoutFlightsInput
  }

  export type FlightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departureAirport?: AirportUpdateOneRequiredWithoutDeparturesNestedInput
    arrivalAirport?: AirportUpdateOneRequiredWithoutArrivalsNestedInput
    passengers?: PassengerUpdateManyWithoutFlightsNestedInput
  }

  export type FlightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    departureAirportId?: StringFieldUpdateOperationsInput | string
    arrivalAirportId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passengers?: PassengerUncheckedUpdateManyWithoutFlightsNestedInput
  }

  export type FlightCreateManyInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    duration: number
    price: number
    availableSeats: number
    status?: $Enums.FlightStatus
    departureAirportId: string
    arrivalAirportId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    departureAirportId?: StringFieldUpdateOperationsInput | string
    arrivalAirportId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassengerCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth: Date | string
    passportNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flights?: FlightCreateNestedManyWithoutPassengersInput
  }

  export type PassengerUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth: Date | string
    passportNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flights?: FlightUncheckedCreateNestedManyWithoutPassengersInput
  }

  export type PassengerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flights?: FlightUpdateManyWithoutPassengersNestedInput
  }

  export type PassengerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flights?: FlightUncheckedUpdateManyWithoutPassengersNestedInput
  }

  export type PassengerCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth: Date | string
    passportNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassengerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassengerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FlightListRelationFilter = {
    every?: FlightWhereInput
    some?: FlightWhereInput
    none?: FlightWhereInput
  }

  export type FlightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AirportCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    city?: SortOrder
    country?: SortOrder
    timezone?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AirportAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type AirportMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    city?: SortOrder
    country?: SortOrder
    timezone?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AirportMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    city?: SortOrder
    country?: SortOrder
    timezone?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AirportSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumFlightStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlightStatus | EnumFlightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlightStatus[]
    notIn?: $Enums.FlightStatus[]
    not?: NestedEnumFlightStatusFilter<$PrismaModel> | $Enums.FlightStatus
  }

  export type AirportScalarRelationFilter = {
    is?: AirportWhereInput
    isNot?: AirportWhereInput
  }

  export type PassengerListRelationFilter = {
    every?: PassengerWhereInput
    some?: PassengerWhereInput
    none?: PassengerWhereInput
  }

  export type PassengerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlightCountOrderByAggregateInput = {
    id?: SortOrder
    flightNumber?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    availableSeats?: SortOrder
    status?: SortOrder
    departureAirportId?: SortOrder
    arrivalAirportId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlightAvgOrderByAggregateInput = {
    duration?: SortOrder
    price?: SortOrder
    availableSeats?: SortOrder
  }

  export type FlightMaxOrderByAggregateInput = {
    id?: SortOrder
    flightNumber?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    availableSeats?: SortOrder
    status?: SortOrder
    departureAirportId?: SortOrder
    arrivalAirportId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlightMinOrderByAggregateInput = {
    id?: SortOrder
    flightNumber?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    availableSeats?: SortOrder
    status?: SortOrder
    departureAirportId?: SortOrder
    arrivalAirportId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlightSumOrderByAggregateInput = {
    duration?: SortOrder
    price?: SortOrder
    availableSeats?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumFlightStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlightStatus | EnumFlightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlightStatus[]
    notIn?: $Enums.FlightStatus[]
    not?: NestedEnumFlightStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlightStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlightStatusFilter<$PrismaModel>
    _max?: NestedEnumFlightStatusFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PassengerCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    passportNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassengerMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    passportNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PassengerMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    passportNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FlightCreateNestedManyWithoutDepartureAirportInput = {
    create?: XOR<FlightCreateWithoutDepartureAirportInput, FlightUncheckedCreateWithoutDepartureAirportInput> | FlightCreateWithoutDepartureAirportInput[] | FlightUncheckedCreateWithoutDepartureAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutDepartureAirportInput | FlightCreateOrConnectWithoutDepartureAirportInput[]
    createMany?: FlightCreateManyDepartureAirportInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type FlightCreateNestedManyWithoutArrivalAirportInput = {
    create?: XOR<FlightCreateWithoutArrivalAirportInput, FlightUncheckedCreateWithoutArrivalAirportInput> | FlightCreateWithoutArrivalAirportInput[] | FlightUncheckedCreateWithoutArrivalAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutArrivalAirportInput | FlightCreateOrConnectWithoutArrivalAirportInput[]
    createMany?: FlightCreateManyArrivalAirportInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type FlightUncheckedCreateNestedManyWithoutDepartureAirportInput = {
    create?: XOR<FlightCreateWithoutDepartureAirportInput, FlightUncheckedCreateWithoutDepartureAirportInput> | FlightCreateWithoutDepartureAirportInput[] | FlightUncheckedCreateWithoutDepartureAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutDepartureAirportInput | FlightCreateOrConnectWithoutDepartureAirportInput[]
    createMany?: FlightCreateManyDepartureAirportInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type FlightUncheckedCreateNestedManyWithoutArrivalAirportInput = {
    create?: XOR<FlightCreateWithoutArrivalAirportInput, FlightUncheckedCreateWithoutArrivalAirportInput> | FlightCreateWithoutArrivalAirportInput[] | FlightUncheckedCreateWithoutArrivalAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutArrivalAirportInput | FlightCreateOrConnectWithoutArrivalAirportInput[]
    createMany?: FlightCreateManyArrivalAirportInputEnvelope
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FlightUpdateManyWithoutDepartureAirportNestedInput = {
    create?: XOR<FlightCreateWithoutDepartureAirportInput, FlightUncheckedCreateWithoutDepartureAirportInput> | FlightCreateWithoutDepartureAirportInput[] | FlightUncheckedCreateWithoutDepartureAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutDepartureAirportInput | FlightCreateOrConnectWithoutDepartureAirportInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutDepartureAirportInput | FlightUpsertWithWhereUniqueWithoutDepartureAirportInput[]
    createMany?: FlightCreateManyDepartureAirportInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutDepartureAirportInput | FlightUpdateWithWhereUniqueWithoutDepartureAirportInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutDepartureAirportInput | FlightUpdateManyWithWhereWithoutDepartureAirportInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type FlightUpdateManyWithoutArrivalAirportNestedInput = {
    create?: XOR<FlightCreateWithoutArrivalAirportInput, FlightUncheckedCreateWithoutArrivalAirportInput> | FlightCreateWithoutArrivalAirportInput[] | FlightUncheckedCreateWithoutArrivalAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutArrivalAirportInput | FlightCreateOrConnectWithoutArrivalAirportInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutArrivalAirportInput | FlightUpsertWithWhereUniqueWithoutArrivalAirportInput[]
    createMany?: FlightCreateManyArrivalAirportInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutArrivalAirportInput | FlightUpdateWithWhereUniqueWithoutArrivalAirportInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutArrivalAirportInput | FlightUpdateManyWithWhereWithoutArrivalAirportInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type FlightUncheckedUpdateManyWithoutDepartureAirportNestedInput = {
    create?: XOR<FlightCreateWithoutDepartureAirportInput, FlightUncheckedCreateWithoutDepartureAirportInput> | FlightCreateWithoutDepartureAirportInput[] | FlightUncheckedCreateWithoutDepartureAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutDepartureAirportInput | FlightCreateOrConnectWithoutDepartureAirportInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutDepartureAirportInput | FlightUpsertWithWhereUniqueWithoutDepartureAirportInput[]
    createMany?: FlightCreateManyDepartureAirportInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutDepartureAirportInput | FlightUpdateWithWhereUniqueWithoutDepartureAirportInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutDepartureAirportInput | FlightUpdateManyWithWhereWithoutDepartureAirportInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type FlightUncheckedUpdateManyWithoutArrivalAirportNestedInput = {
    create?: XOR<FlightCreateWithoutArrivalAirportInput, FlightUncheckedCreateWithoutArrivalAirportInput> | FlightCreateWithoutArrivalAirportInput[] | FlightUncheckedCreateWithoutArrivalAirportInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutArrivalAirportInput | FlightCreateOrConnectWithoutArrivalAirportInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutArrivalAirportInput | FlightUpsertWithWhereUniqueWithoutArrivalAirportInput[]
    createMany?: FlightCreateManyArrivalAirportInputEnvelope
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutArrivalAirportInput | FlightUpdateWithWhereUniqueWithoutArrivalAirportInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutArrivalAirportInput | FlightUpdateManyWithWhereWithoutArrivalAirportInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type AirportCreateNestedOneWithoutDeparturesInput = {
    create?: XOR<AirportCreateWithoutDeparturesInput, AirportUncheckedCreateWithoutDeparturesInput>
    connectOrCreate?: AirportCreateOrConnectWithoutDeparturesInput
    connect?: AirportWhereUniqueInput
  }

  export type AirportCreateNestedOneWithoutArrivalsInput = {
    create?: XOR<AirportCreateWithoutArrivalsInput, AirportUncheckedCreateWithoutArrivalsInput>
    connectOrCreate?: AirportCreateOrConnectWithoutArrivalsInput
    connect?: AirportWhereUniqueInput
  }

  export type PassengerCreateNestedManyWithoutFlightsInput = {
    create?: XOR<PassengerCreateWithoutFlightsInput, PassengerUncheckedCreateWithoutFlightsInput> | PassengerCreateWithoutFlightsInput[] | PassengerUncheckedCreateWithoutFlightsInput[]
    connectOrCreate?: PassengerCreateOrConnectWithoutFlightsInput | PassengerCreateOrConnectWithoutFlightsInput[]
    connect?: PassengerWhereUniqueInput | PassengerWhereUniqueInput[]
  }

  export type PassengerUncheckedCreateNestedManyWithoutFlightsInput = {
    create?: XOR<PassengerCreateWithoutFlightsInput, PassengerUncheckedCreateWithoutFlightsInput> | PassengerCreateWithoutFlightsInput[] | PassengerUncheckedCreateWithoutFlightsInput[]
    connectOrCreate?: PassengerCreateOrConnectWithoutFlightsInput | PassengerCreateOrConnectWithoutFlightsInput[]
    connect?: PassengerWhereUniqueInput | PassengerWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumFlightStatusFieldUpdateOperationsInput = {
    set?: $Enums.FlightStatus
  }

  export type AirportUpdateOneRequiredWithoutDeparturesNestedInput = {
    create?: XOR<AirportCreateWithoutDeparturesInput, AirportUncheckedCreateWithoutDeparturesInput>
    connectOrCreate?: AirportCreateOrConnectWithoutDeparturesInput
    upsert?: AirportUpsertWithoutDeparturesInput
    connect?: AirportWhereUniqueInput
    update?: XOR<XOR<AirportUpdateToOneWithWhereWithoutDeparturesInput, AirportUpdateWithoutDeparturesInput>, AirportUncheckedUpdateWithoutDeparturesInput>
  }

  export type AirportUpdateOneRequiredWithoutArrivalsNestedInput = {
    create?: XOR<AirportCreateWithoutArrivalsInput, AirportUncheckedCreateWithoutArrivalsInput>
    connectOrCreate?: AirportCreateOrConnectWithoutArrivalsInput
    upsert?: AirportUpsertWithoutArrivalsInput
    connect?: AirportWhereUniqueInput
    update?: XOR<XOR<AirportUpdateToOneWithWhereWithoutArrivalsInput, AirportUpdateWithoutArrivalsInput>, AirportUncheckedUpdateWithoutArrivalsInput>
  }

  export type PassengerUpdateManyWithoutFlightsNestedInput = {
    create?: XOR<PassengerCreateWithoutFlightsInput, PassengerUncheckedCreateWithoutFlightsInput> | PassengerCreateWithoutFlightsInput[] | PassengerUncheckedCreateWithoutFlightsInput[]
    connectOrCreate?: PassengerCreateOrConnectWithoutFlightsInput | PassengerCreateOrConnectWithoutFlightsInput[]
    upsert?: PassengerUpsertWithWhereUniqueWithoutFlightsInput | PassengerUpsertWithWhereUniqueWithoutFlightsInput[]
    set?: PassengerWhereUniqueInput | PassengerWhereUniqueInput[]
    disconnect?: PassengerWhereUniqueInput | PassengerWhereUniqueInput[]
    delete?: PassengerWhereUniqueInput | PassengerWhereUniqueInput[]
    connect?: PassengerWhereUniqueInput | PassengerWhereUniqueInput[]
    update?: PassengerUpdateWithWhereUniqueWithoutFlightsInput | PassengerUpdateWithWhereUniqueWithoutFlightsInput[]
    updateMany?: PassengerUpdateManyWithWhereWithoutFlightsInput | PassengerUpdateManyWithWhereWithoutFlightsInput[]
    deleteMany?: PassengerScalarWhereInput | PassengerScalarWhereInput[]
  }

  export type PassengerUncheckedUpdateManyWithoutFlightsNestedInput = {
    create?: XOR<PassengerCreateWithoutFlightsInput, PassengerUncheckedCreateWithoutFlightsInput> | PassengerCreateWithoutFlightsInput[] | PassengerUncheckedCreateWithoutFlightsInput[]
    connectOrCreate?: PassengerCreateOrConnectWithoutFlightsInput | PassengerCreateOrConnectWithoutFlightsInput[]
    upsert?: PassengerUpsertWithWhereUniqueWithoutFlightsInput | PassengerUpsertWithWhereUniqueWithoutFlightsInput[]
    set?: PassengerWhereUniqueInput | PassengerWhereUniqueInput[]
    disconnect?: PassengerWhereUniqueInput | PassengerWhereUniqueInput[]
    delete?: PassengerWhereUniqueInput | PassengerWhereUniqueInput[]
    connect?: PassengerWhereUniqueInput | PassengerWhereUniqueInput[]
    update?: PassengerUpdateWithWhereUniqueWithoutFlightsInput | PassengerUpdateWithWhereUniqueWithoutFlightsInput[]
    updateMany?: PassengerUpdateManyWithWhereWithoutFlightsInput | PassengerUpdateManyWithWhereWithoutFlightsInput[]
    deleteMany?: PassengerScalarWhereInput | PassengerScalarWhereInput[]
  }

  export type FlightCreateNestedManyWithoutPassengersInput = {
    create?: XOR<FlightCreateWithoutPassengersInput, FlightUncheckedCreateWithoutPassengersInput> | FlightCreateWithoutPassengersInput[] | FlightUncheckedCreateWithoutPassengersInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutPassengersInput | FlightCreateOrConnectWithoutPassengersInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type FlightUncheckedCreateNestedManyWithoutPassengersInput = {
    create?: XOR<FlightCreateWithoutPassengersInput, FlightUncheckedCreateWithoutPassengersInput> | FlightCreateWithoutPassengersInput[] | FlightUncheckedCreateWithoutPassengersInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutPassengersInput | FlightCreateOrConnectWithoutPassengersInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FlightUpdateManyWithoutPassengersNestedInput = {
    create?: XOR<FlightCreateWithoutPassengersInput, FlightUncheckedCreateWithoutPassengersInput> | FlightCreateWithoutPassengersInput[] | FlightUncheckedCreateWithoutPassengersInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutPassengersInput | FlightCreateOrConnectWithoutPassengersInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutPassengersInput | FlightUpsertWithWhereUniqueWithoutPassengersInput[]
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutPassengersInput | FlightUpdateWithWhereUniqueWithoutPassengersInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutPassengersInput | FlightUpdateManyWithWhereWithoutPassengersInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type FlightUncheckedUpdateManyWithoutPassengersNestedInput = {
    create?: XOR<FlightCreateWithoutPassengersInput, FlightUncheckedCreateWithoutPassengersInput> | FlightCreateWithoutPassengersInput[] | FlightUncheckedCreateWithoutPassengersInput[]
    connectOrCreate?: FlightCreateOrConnectWithoutPassengersInput | FlightCreateOrConnectWithoutPassengersInput[]
    upsert?: FlightUpsertWithWhereUniqueWithoutPassengersInput | FlightUpsertWithWhereUniqueWithoutPassengersInput[]
    set?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    disconnect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    delete?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    connect?: FlightWhereUniqueInput | FlightWhereUniqueInput[]
    update?: FlightUpdateWithWhereUniqueWithoutPassengersInput | FlightUpdateWithWhereUniqueWithoutPassengersInput[]
    updateMany?: FlightUpdateManyWithWhereWithoutPassengersInput | FlightUpdateManyWithWhereWithoutPassengersInput[]
    deleteMany?: FlightScalarWhereInput | FlightScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumFlightStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlightStatus | EnumFlightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlightStatus[]
    notIn?: $Enums.FlightStatus[]
    not?: NestedEnumFlightStatusFilter<$PrismaModel> | $Enums.FlightStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumFlightStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlightStatus | EnumFlightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlightStatus[]
    notIn?: $Enums.FlightStatus[]
    not?: NestedEnumFlightStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlightStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlightStatusFilter<$PrismaModel>
    _max?: NestedEnumFlightStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FlightCreateWithoutDepartureAirportInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    duration: number
    price: number
    availableSeats: number
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    arrivalAirport: AirportCreateNestedOneWithoutArrivalsInput
    passengers?: PassengerCreateNestedManyWithoutFlightsInput
  }

  export type FlightUncheckedCreateWithoutDepartureAirportInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    duration: number
    price: number
    availableSeats: number
    status?: $Enums.FlightStatus
    arrivalAirportId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passengers?: PassengerUncheckedCreateNestedManyWithoutFlightsInput
  }

  export type FlightCreateOrConnectWithoutDepartureAirportInput = {
    where: FlightWhereUniqueInput
    create: XOR<FlightCreateWithoutDepartureAirportInput, FlightUncheckedCreateWithoutDepartureAirportInput>
  }

  export type FlightCreateManyDepartureAirportInputEnvelope = {
    data: FlightCreateManyDepartureAirportInput | FlightCreateManyDepartureAirportInput[]
  }

  export type FlightCreateWithoutArrivalAirportInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    duration: number
    price: number
    availableSeats: number
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    departureAirport: AirportCreateNestedOneWithoutDeparturesInput
    passengers?: PassengerCreateNestedManyWithoutFlightsInput
  }

  export type FlightUncheckedCreateWithoutArrivalAirportInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    duration: number
    price: number
    availableSeats: number
    status?: $Enums.FlightStatus
    departureAirportId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    passengers?: PassengerUncheckedCreateNestedManyWithoutFlightsInput
  }

  export type FlightCreateOrConnectWithoutArrivalAirportInput = {
    where: FlightWhereUniqueInput
    create: XOR<FlightCreateWithoutArrivalAirportInput, FlightUncheckedCreateWithoutArrivalAirportInput>
  }

  export type FlightCreateManyArrivalAirportInputEnvelope = {
    data: FlightCreateManyArrivalAirportInput | FlightCreateManyArrivalAirportInput[]
  }

  export type FlightUpsertWithWhereUniqueWithoutDepartureAirportInput = {
    where: FlightWhereUniqueInput
    update: XOR<FlightUpdateWithoutDepartureAirportInput, FlightUncheckedUpdateWithoutDepartureAirportInput>
    create: XOR<FlightCreateWithoutDepartureAirportInput, FlightUncheckedCreateWithoutDepartureAirportInput>
  }

  export type FlightUpdateWithWhereUniqueWithoutDepartureAirportInput = {
    where: FlightWhereUniqueInput
    data: XOR<FlightUpdateWithoutDepartureAirportInput, FlightUncheckedUpdateWithoutDepartureAirportInput>
  }

  export type FlightUpdateManyWithWhereWithoutDepartureAirportInput = {
    where: FlightScalarWhereInput
    data: XOR<FlightUpdateManyMutationInput, FlightUncheckedUpdateManyWithoutDepartureAirportInput>
  }

  export type FlightScalarWhereInput = {
    AND?: FlightScalarWhereInput | FlightScalarWhereInput[]
    OR?: FlightScalarWhereInput[]
    NOT?: FlightScalarWhereInput | FlightScalarWhereInput[]
    id?: StringFilter<"Flight"> | string
    flightNumber?: StringFilter<"Flight"> | string
    departureTime?: DateTimeFilter<"Flight"> | Date | string
    arrivalTime?: DateTimeFilter<"Flight"> | Date | string
    duration?: IntFilter<"Flight"> | number
    price?: FloatFilter<"Flight"> | number
    availableSeats?: IntFilter<"Flight"> | number
    status?: EnumFlightStatusFilter<"Flight"> | $Enums.FlightStatus
    departureAirportId?: StringFilter<"Flight"> | string
    arrivalAirportId?: StringFilter<"Flight"> | string
    createdAt?: DateTimeFilter<"Flight"> | Date | string
    updatedAt?: DateTimeFilter<"Flight"> | Date | string
  }

  export type FlightUpsertWithWhereUniqueWithoutArrivalAirportInput = {
    where: FlightWhereUniqueInput
    update: XOR<FlightUpdateWithoutArrivalAirportInput, FlightUncheckedUpdateWithoutArrivalAirportInput>
    create: XOR<FlightCreateWithoutArrivalAirportInput, FlightUncheckedCreateWithoutArrivalAirportInput>
  }

  export type FlightUpdateWithWhereUniqueWithoutArrivalAirportInput = {
    where: FlightWhereUniqueInput
    data: XOR<FlightUpdateWithoutArrivalAirportInput, FlightUncheckedUpdateWithoutArrivalAirportInput>
  }

  export type FlightUpdateManyWithWhereWithoutArrivalAirportInput = {
    where: FlightScalarWhereInput
    data: XOR<FlightUpdateManyMutationInput, FlightUncheckedUpdateManyWithoutArrivalAirportInput>
  }

  export type AirportCreateWithoutDeparturesInput = {
    id?: string
    code: string
    name: string
    city: string
    country: string
    timezone: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    arrivals?: FlightCreateNestedManyWithoutArrivalAirportInput
  }

  export type AirportUncheckedCreateWithoutDeparturesInput = {
    id?: string
    code: string
    name: string
    city: string
    country: string
    timezone: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    arrivals?: FlightUncheckedCreateNestedManyWithoutArrivalAirportInput
  }

  export type AirportCreateOrConnectWithoutDeparturesInput = {
    where: AirportWhereUniqueInput
    create: XOR<AirportCreateWithoutDeparturesInput, AirportUncheckedCreateWithoutDeparturesInput>
  }

  export type AirportCreateWithoutArrivalsInput = {
    id?: string
    code: string
    name: string
    city: string
    country: string
    timezone: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    departures?: FlightCreateNestedManyWithoutDepartureAirportInput
  }

  export type AirportUncheckedCreateWithoutArrivalsInput = {
    id?: string
    code: string
    name: string
    city: string
    country: string
    timezone: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    departures?: FlightUncheckedCreateNestedManyWithoutDepartureAirportInput
  }

  export type AirportCreateOrConnectWithoutArrivalsInput = {
    where: AirportWhereUniqueInput
    create: XOR<AirportCreateWithoutArrivalsInput, AirportUncheckedCreateWithoutArrivalsInput>
  }

  export type PassengerCreateWithoutFlightsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth: Date | string
    passportNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassengerUncheckedCreateWithoutFlightsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone?: string | null
    dateOfBirth: Date | string
    passportNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PassengerCreateOrConnectWithoutFlightsInput = {
    where: PassengerWhereUniqueInput
    create: XOR<PassengerCreateWithoutFlightsInput, PassengerUncheckedCreateWithoutFlightsInput>
  }

  export type AirportUpsertWithoutDeparturesInput = {
    update: XOR<AirportUpdateWithoutDeparturesInput, AirportUncheckedUpdateWithoutDeparturesInput>
    create: XOR<AirportCreateWithoutDeparturesInput, AirportUncheckedCreateWithoutDeparturesInput>
    where?: AirportWhereInput
  }

  export type AirportUpdateToOneWithWhereWithoutDeparturesInput = {
    where?: AirportWhereInput
    data: XOR<AirportUpdateWithoutDeparturesInput, AirportUncheckedUpdateWithoutDeparturesInput>
  }

  export type AirportUpdateWithoutDeparturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivals?: FlightUpdateManyWithoutArrivalAirportNestedInput
  }

  export type AirportUncheckedUpdateWithoutDeparturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivals?: FlightUncheckedUpdateManyWithoutArrivalAirportNestedInput
  }

  export type AirportUpsertWithoutArrivalsInput = {
    update: XOR<AirportUpdateWithoutArrivalsInput, AirportUncheckedUpdateWithoutArrivalsInput>
    create: XOR<AirportCreateWithoutArrivalsInput, AirportUncheckedCreateWithoutArrivalsInput>
    where?: AirportWhereInput
  }

  export type AirportUpdateToOneWithWhereWithoutArrivalsInput = {
    where?: AirportWhereInput
    data: XOR<AirportUpdateWithoutArrivalsInput, AirportUncheckedUpdateWithoutArrivalsInput>
  }

  export type AirportUpdateWithoutArrivalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departures?: FlightUpdateManyWithoutDepartureAirportNestedInput
  }

  export type AirportUncheckedUpdateWithoutArrivalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departures?: FlightUncheckedUpdateManyWithoutDepartureAirportNestedInput
  }

  export type PassengerUpsertWithWhereUniqueWithoutFlightsInput = {
    where: PassengerWhereUniqueInput
    update: XOR<PassengerUpdateWithoutFlightsInput, PassengerUncheckedUpdateWithoutFlightsInput>
    create: XOR<PassengerCreateWithoutFlightsInput, PassengerUncheckedCreateWithoutFlightsInput>
  }

  export type PassengerUpdateWithWhereUniqueWithoutFlightsInput = {
    where: PassengerWhereUniqueInput
    data: XOR<PassengerUpdateWithoutFlightsInput, PassengerUncheckedUpdateWithoutFlightsInput>
  }

  export type PassengerUpdateManyWithWhereWithoutFlightsInput = {
    where: PassengerScalarWhereInput
    data: XOR<PassengerUpdateManyMutationInput, PassengerUncheckedUpdateManyWithoutFlightsInput>
  }

  export type PassengerScalarWhereInput = {
    AND?: PassengerScalarWhereInput | PassengerScalarWhereInput[]
    OR?: PassengerScalarWhereInput[]
    NOT?: PassengerScalarWhereInput | PassengerScalarWhereInput[]
    id?: StringFilter<"Passenger"> | string
    firstName?: StringFilter<"Passenger"> | string
    lastName?: StringFilter<"Passenger"> | string
    email?: StringFilter<"Passenger"> | string
    phone?: StringNullableFilter<"Passenger"> | string | null
    dateOfBirth?: DateTimeFilter<"Passenger"> | Date | string
    passportNumber?: StringNullableFilter<"Passenger"> | string | null
    createdAt?: DateTimeFilter<"Passenger"> | Date | string
    updatedAt?: DateTimeFilter<"Passenger"> | Date | string
  }

  export type FlightCreateWithoutPassengersInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    duration: number
    price: number
    availableSeats: number
    status?: $Enums.FlightStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    departureAirport: AirportCreateNestedOneWithoutDeparturesInput
    arrivalAirport: AirportCreateNestedOneWithoutArrivalsInput
  }

  export type FlightUncheckedCreateWithoutPassengersInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    duration: number
    price: number
    availableSeats: number
    status?: $Enums.FlightStatus
    departureAirportId: string
    arrivalAirportId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightCreateOrConnectWithoutPassengersInput = {
    where: FlightWhereUniqueInput
    create: XOR<FlightCreateWithoutPassengersInput, FlightUncheckedCreateWithoutPassengersInput>
  }

  export type FlightUpsertWithWhereUniqueWithoutPassengersInput = {
    where: FlightWhereUniqueInput
    update: XOR<FlightUpdateWithoutPassengersInput, FlightUncheckedUpdateWithoutPassengersInput>
    create: XOR<FlightCreateWithoutPassengersInput, FlightUncheckedCreateWithoutPassengersInput>
  }

  export type FlightUpdateWithWhereUniqueWithoutPassengersInput = {
    where: FlightWhereUniqueInput
    data: XOR<FlightUpdateWithoutPassengersInput, FlightUncheckedUpdateWithoutPassengersInput>
  }

  export type FlightUpdateManyWithWhereWithoutPassengersInput = {
    where: FlightScalarWhereInput
    data: XOR<FlightUpdateManyMutationInput, FlightUncheckedUpdateManyWithoutPassengersInput>
  }

  export type FlightCreateManyDepartureAirportInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    duration: number
    price: number
    availableSeats: number
    status?: $Enums.FlightStatus
    arrivalAirportId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightCreateManyArrivalAirportInput = {
    id?: string
    flightNumber: string
    departureTime: Date | string
    arrivalTime: Date | string
    duration: number
    price: number
    availableSeats: number
    status?: $Enums.FlightStatus
    departureAirportId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightUpdateWithoutDepartureAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalAirport?: AirportUpdateOneRequiredWithoutArrivalsNestedInput
    passengers?: PassengerUpdateManyWithoutFlightsNestedInput
  }

  export type FlightUncheckedUpdateWithoutDepartureAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    arrivalAirportId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passengers?: PassengerUncheckedUpdateManyWithoutFlightsNestedInput
  }

  export type FlightUncheckedUpdateManyWithoutDepartureAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    arrivalAirportId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightUpdateWithoutArrivalAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departureAirport?: AirportUpdateOneRequiredWithoutDeparturesNestedInput
    passengers?: PassengerUpdateManyWithoutFlightsNestedInput
  }

  export type FlightUncheckedUpdateWithoutArrivalAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    departureAirportId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passengers?: PassengerUncheckedUpdateManyWithoutFlightsNestedInput
  }

  export type FlightUncheckedUpdateManyWithoutArrivalAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    departureAirportId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassengerUpdateWithoutFlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassengerUncheckedUpdateWithoutFlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassengerUncheckedUpdateManyWithoutFlightsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightUpdateWithoutPassengersInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    departureAirport?: AirportUpdateOneRequiredWithoutDeparturesNestedInput
    arrivalAirport?: AirportUpdateOneRequiredWithoutArrivalsNestedInput
  }

  export type FlightUncheckedUpdateWithoutPassengersInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    departureAirportId?: StringFieldUpdateOperationsInput | string
    arrivalAirportId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightUncheckedUpdateManyWithoutPassengersInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightNumber?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    availableSeats?: IntFieldUpdateOperationsInput | number
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    departureAirportId?: StringFieldUpdateOperationsInput | string
    arrivalAirportId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}