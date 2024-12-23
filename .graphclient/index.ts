// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import AutoPaginationTransform from "@graphprotocol/client-auto-pagination";
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { EnsTypes } from './sources/ens/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
  Timestamp: any;
};

export type AbiChanged = ResolverEvent & {
  /** Concatenation of block number and log ID */
  id: Scalars['ID'];
  /** Used to derive relationships to Resolvers */
  resolver: Resolver;
  /** The block number at which the event was emitted */
  blockNumber: Scalars['Int'];
  /** The transaction hash of the transaction in which the event was emitted */
  transactionID: Scalars['Bytes'];
  /** The content type of the ABI change */
  contentType: Scalars['BigInt'];
};

export type AbiChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  contentType?: InputMaybe<Scalars['BigInt']>;
  contentType_not?: InputMaybe<Scalars['BigInt']>;
  contentType_gt?: InputMaybe<Scalars['BigInt']>;
  contentType_lt?: InputMaybe<Scalars['BigInt']>;
  contentType_gte?: InputMaybe<Scalars['BigInt']>;
  contentType_lte?: InputMaybe<Scalars['BigInt']>;
  contentType_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contentType_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AbiChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AbiChanged_filter>>>;
};

export type AbiChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'contentType';

export type Account = {
  /** The unique identifier for the account */
  id: Scalars['ID'];
  /** The domains owned by the account */
  domains: Array<Domain>;
  /** The WrappedDomains owned by the account */
  wrappedDomains?: Maybe<Array<WrappedDomain>>;
  /** The Registrations made by the account */
  registrations?: Maybe<Array<Registration>>;
};


export type AccountdomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Domain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Domain_filter>;
};


export type AccountwrappedDomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WrappedDomain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WrappedDomain_filter>;
};


export type AccountregistrationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Registration_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Registration_filter>;
};

export type Account_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domains_?: InputMaybe<Domain_filter>;
  wrappedDomains_?: InputMaybe<WrappedDomain_filter>;
  registrations_?: InputMaybe<Registration_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Account_filter>>>;
};

export type Account_orderBy =
  | 'id'
  | 'domains'
  | 'wrappedDomains'
  | 'registrations';

export type AddrChanged = ResolverEvent & {
  /** Unique identifier for this event */
  id: Scalars['ID'];
  /** The resolver associated with this event */
  resolver: Resolver;
  /** The block number at which this event occurred */
  blockNumber: Scalars['Int'];
  /** The transaction ID for the transaction in which this event occurred */
  transactionID: Scalars['Bytes'];
  /** The new address associated with the resolver */
  addr: Account;
};

export type AddrChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  addr?: InputMaybe<Scalars['String']>;
  addr_not?: InputMaybe<Scalars['String']>;
  addr_gt?: InputMaybe<Scalars['String']>;
  addr_lt?: InputMaybe<Scalars['String']>;
  addr_gte?: InputMaybe<Scalars['String']>;
  addr_lte?: InputMaybe<Scalars['String']>;
  addr_in?: InputMaybe<Array<Scalars['String']>>;
  addr_not_in?: InputMaybe<Array<Scalars['String']>>;
  addr_contains?: InputMaybe<Scalars['String']>;
  addr_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_not_contains?: InputMaybe<Scalars['String']>;
  addr_not_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_starts_with?: InputMaybe<Scalars['String']>;
  addr_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_starts_with?: InputMaybe<Scalars['String']>;
  addr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_ends_with?: InputMaybe<Scalars['String']>;
  addr_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_ends_with?: InputMaybe<Scalars['String']>;
  addr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AddrChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AddrChanged_filter>>>;
};

export type AddrChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'addr'
  | 'addr__id';

export type Aggregation_interval =
  | 'hour'
  | 'day';

export type AuthorisationChanged = ResolverEvent & {
  /** Unique identifier for this event */
  id: Scalars['ID'];
  /** The resolver associated with this event */
  resolver: Resolver;
  /** The block number at which the event occurred */
  blockNumber: Scalars['Int'];
  /** The transaction hash associated with the event */
  transactionID: Scalars['Bytes'];
  /** The owner of the authorisation */
  owner: Scalars['Bytes'];
  /** The target of the authorisation */
  target: Scalars['Bytes'];
  /** Whether the authorisation was added or removed */
  isAuthorized: Scalars['Boolean'];
};

export type AuthorisationChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['Bytes']>;
  owner_not?: InputMaybe<Scalars['Bytes']>;
  owner_gt?: InputMaybe<Scalars['Bytes']>;
  owner_lt?: InputMaybe<Scalars['Bytes']>;
  owner_gte?: InputMaybe<Scalars['Bytes']>;
  owner_lte?: InputMaybe<Scalars['Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  owner_contains?: InputMaybe<Scalars['Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']>;
  target?: InputMaybe<Scalars['Bytes']>;
  target_not?: InputMaybe<Scalars['Bytes']>;
  target_gt?: InputMaybe<Scalars['Bytes']>;
  target_lt?: InputMaybe<Scalars['Bytes']>;
  target_gte?: InputMaybe<Scalars['Bytes']>;
  target_lte?: InputMaybe<Scalars['Bytes']>;
  target_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  target_contains?: InputMaybe<Scalars['Bytes']>;
  target_not_contains?: InputMaybe<Scalars['Bytes']>;
  isAuthorized?: InputMaybe<Scalars['Boolean']>;
  isAuthorized_not?: InputMaybe<Scalars['Boolean']>;
  isAuthorized_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isAuthorized_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AuthorisationChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<AuthorisationChanged_filter>>>;
};

export type AuthorisationChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'owner'
  | 'target'
  | 'isAuthorized';

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type ContenthashChanged = ResolverEvent & {
  /** Concatenation of block number and log ID */
  id: Scalars['ID'];
  /** Used to derive relationships to Resolvers */
  resolver: Resolver;
  /** The block number where the event occurred */
  blockNumber: Scalars['Int'];
  /** The ID of the transaction where the event occurred */
  transactionID: Scalars['Bytes'];
  /** The new content hash for the domain */
  hash: Scalars['Bytes'];
};

export type ContenthashChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  hash?: InputMaybe<Scalars['Bytes']>;
  hash_not?: InputMaybe<Scalars['Bytes']>;
  hash_gt?: InputMaybe<Scalars['Bytes']>;
  hash_lt?: InputMaybe<Scalars['Bytes']>;
  hash_gte?: InputMaybe<Scalars['Bytes']>;
  hash_lte?: InputMaybe<Scalars['Bytes']>;
  hash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  hash_contains?: InputMaybe<Scalars['Bytes']>;
  hash_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ContenthashChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ContenthashChanged_filter>>>;
};

export type ContenthashChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'hash';

export type Domain = {
  /** The namehash of the name */
  id: Scalars['ID'];
  /** The human readable name, if known. Unknown portions replaced with hash in square brackets (eg, foo.[1234].eth) */
  name?: Maybe<Scalars['String']>;
  /** The human readable label name (imported from CSV), if known */
  labelName?: Maybe<Scalars['String']>;
  /** keccak256(labelName) */
  labelhash?: Maybe<Scalars['Bytes']>;
  /** The namehash (id) of the parent name */
  parent?: Maybe<Domain>;
  /** Can count domains from length of array */
  subdomains: Array<Domain>;
  /** The number of subdomains */
  subdomainCount: Scalars['Int'];
  /** Address logged from current resolver, if any */
  resolvedAddress?: Maybe<Account>;
  /** The resolver that controls the domain's settings */
  resolver?: Maybe<Resolver>;
  /** The time-to-live (TTL) value of the domain's records */
  ttl?: Maybe<Scalars['BigInt']>;
  /** Indicates whether the domain has been migrated to a new registrar */
  isMigrated: Scalars['Boolean'];
  /** The time when the domain was created */
  createdAt: Scalars['BigInt'];
  /** The account that owns the domain */
  owner: Account;
  /** The account that owns the ERC721 NFT for the domain */
  registrant?: Maybe<Account>;
  /** The account that owns the wrapped domain */
  wrappedOwner?: Maybe<Account>;
  /** The expiry date for the domain, from either the registration, or the wrapped domain if PCC is burned */
  expiryDate?: Maybe<Scalars['BigInt']>;
  /** The registration associated with the domain */
  registration?: Maybe<Registration>;
  /** The wrapped domain associated with the domain */
  wrappedDomain?: Maybe<WrappedDomain>;
  /** The events associated with the domain */
  events: Array<DomainEvent>;
};


export type DomainsubdomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Domain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Domain_filter>;
};


export type DomaineventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DomainEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DomainEvent_filter>;
};

export type DomainEvent = {
  /** The unique identifier of the event */
  id: Scalars['ID'];
  /** The domain name associated with the event */
  domain: Domain;
  /** The block number at which the event occurred */
  blockNumber: Scalars['Int'];
  /** The transaction hash of the transaction that triggered the event */
  transactionID: Scalars['Bytes'];
};

export type DomainEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<DomainEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<DomainEvent_filter>>>;
};

export type DomainEvent_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__subdomainCount'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'domain__expiryDate'
  | 'blockNumber'
  | 'transactionID';

export type Domain_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelName?: InputMaybe<Scalars['String']>;
  labelName_not?: InputMaybe<Scalars['String']>;
  labelName_gt?: InputMaybe<Scalars['String']>;
  labelName_lt?: InputMaybe<Scalars['String']>;
  labelName_gte?: InputMaybe<Scalars['String']>;
  labelName_lte?: InputMaybe<Scalars['String']>;
  labelName_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_not_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_contains?: InputMaybe<Scalars['String']>;
  labelName_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_contains?: InputMaybe<Scalars['String']>;
  labelName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_starts_with?: InputMaybe<Scalars['String']>;
  labelName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_ends_with?: InputMaybe<Scalars['String']>;
  labelName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelhash?: InputMaybe<Scalars['Bytes']>;
  labelhash_not?: InputMaybe<Scalars['Bytes']>;
  labelhash_gt?: InputMaybe<Scalars['Bytes']>;
  labelhash_lt?: InputMaybe<Scalars['Bytes']>;
  labelhash_gte?: InputMaybe<Scalars['Bytes']>;
  labelhash_lte?: InputMaybe<Scalars['Bytes']>;
  labelhash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  labelhash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  labelhash_contains?: InputMaybe<Scalars['Bytes']>;
  labelhash_not_contains?: InputMaybe<Scalars['Bytes']>;
  parent?: InputMaybe<Scalars['String']>;
  parent_not?: InputMaybe<Scalars['String']>;
  parent_gt?: InputMaybe<Scalars['String']>;
  parent_lt?: InputMaybe<Scalars['String']>;
  parent_gte?: InputMaybe<Scalars['String']>;
  parent_lte?: InputMaybe<Scalars['String']>;
  parent_in?: InputMaybe<Array<Scalars['String']>>;
  parent_not_in?: InputMaybe<Array<Scalars['String']>>;
  parent_contains?: InputMaybe<Scalars['String']>;
  parent_contains_nocase?: InputMaybe<Scalars['String']>;
  parent_not_contains?: InputMaybe<Scalars['String']>;
  parent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  parent_starts_with?: InputMaybe<Scalars['String']>;
  parent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parent_not_starts_with?: InputMaybe<Scalars['String']>;
  parent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parent_ends_with?: InputMaybe<Scalars['String']>;
  parent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parent_not_ends_with?: InputMaybe<Scalars['String']>;
  parent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parent_?: InputMaybe<Domain_filter>;
  subdomains_?: InputMaybe<Domain_filter>;
  subdomainCount?: InputMaybe<Scalars['Int']>;
  subdomainCount_not?: InputMaybe<Scalars['Int']>;
  subdomainCount_gt?: InputMaybe<Scalars['Int']>;
  subdomainCount_lt?: InputMaybe<Scalars['Int']>;
  subdomainCount_gte?: InputMaybe<Scalars['Int']>;
  subdomainCount_lte?: InputMaybe<Scalars['Int']>;
  subdomainCount_in?: InputMaybe<Array<Scalars['Int']>>;
  subdomainCount_not_in?: InputMaybe<Array<Scalars['Int']>>;
  resolvedAddress?: InputMaybe<Scalars['String']>;
  resolvedAddress_not?: InputMaybe<Scalars['String']>;
  resolvedAddress_gt?: InputMaybe<Scalars['String']>;
  resolvedAddress_lt?: InputMaybe<Scalars['String']>;
  resolvedAddress_gte?: InputMaybe<Scalars['String']>;
  resolvedAddress_lte?: InputMaybe<Scalars['String']>;
  resolvedAddress_in?: InputMaybe<Array<Scalars['String']>>;
  resolvedAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolvedAddress_contains?: InputMaybe<Scalars['String']>;
  resolvedAddress_contains_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_contains?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_starts_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_starts_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_ends_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_ends_with?: InputMaybe<Scalars['String']>;
  resolvedAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolvedAddress_?: InputMaybe<Account_filter>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  ttl?: InputMaybe<Scalars['BigInt']>;
  ttl_not?: InputMaybe<Scalars['BigInt']>;
  ttl_gt?: InputMaybe<Scalars['BigInt']>;
  ttl_lt?: InputMaybe<Scalars['BigInt']>;
  ttl_gte?: InputMaybe<Scalars['BigInt']>;
  ttl_lte?: InputMaybe<Scalars['BigInt']>;
  ttl_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ttl_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  isMigrated?: InputMaybe<Scalars['Boolean']>;
  isMigrated_not?: InputMaybe<Scalars['Boolean']>;
  isMigrated_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isMigrated_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  registrant?: InputMaybe<Scalars['String']>;
  registrant_not?: InputMaybe<Scalars['String']>;
  registrant_gt?: InputMaybe<Scalars['String']>;
  registrant_lt?: InputMaybe<Scalars['String']>;
  registrant_gte?: InputMaybe<Scalars['String']>;
  registrant_lte?: InputMaybe<Scalars['String']>;
  registrant_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_not_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_contains?: InputMaybe<Scalars['String']>;
  registrant_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_contains?: InputMaybe<Scalars['String']>;
  registrant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_starts_with?: InputMaybe<Scalars['String']>;
  registrant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_ends_with?: InputMaybe<Scalars['String']>;
  registrant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_?: InputMaybe<Account_filter>;
  wrappedOwner?: InputMaybe<Scalars['String']>;
  wrappedOwner_not?: InputMaybe<Scalars['String']>;
  wrappedOwner_gt?: InputMaybe<Scalars['String']>;
  wrappedOwner_lt?: InputMaybe<Scalars['String']>;
  wrappedOwner_gte?: InputMaybe<Scalars['String']>;
  wrappedOwner_lte?: InputMaybe<Scalars['String']>;
  wrappedOwner_in?: InputMaybe<Array<Scalars['String']>>;
  wrappedOwner_not_in?: InputMaybe<Array<Scalars['String']>>;
  wrappedOwner_contains?: InputMaybe<Scalars['String']>;
  wrappedOwner_contains_nocase?: InputMaybe<Scalars['String']>;
  wrappedOwner_not_contains?: InputMaybe<Scalars['String']>;
  wrappedOwner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  wrappedOwner_starts_with?: InputMaybe<Scalars['String']>;
  wrappedOwner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  wrappedOwner_not_starts_with?: InputMaybe<Scalars['String']>;
  wrappedOwner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  wrappedOwner_ends_with?: InputMaybe<Scalars['String']>;
  wrappedOwner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  wrappedOwner_not_ends_with?: InputMaybe<Scalars['String']>;
  wrappedOwner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  wrappedOwner_?: InputMaybe<Account_filter>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registration_?: InputMaybe<Registration_filter>;
  wrappedDomain_?: InputMaybe<WrappedDomain_filter>;
  events_?: InputMaybe<DomainEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Domain_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Domain_filter>>>;
};

export type Domain_orderBy =
  | 'id'
  | 'name'
  | 'labelName'
  | 'labelhash'
  | 'parent'
  | 'parent__id'
  | 'parent__name'
  | 'parent__labelName'
  | 'parent__labelhash'
  | 'parent__subdomainCount'
  | 'parent__ttl'
  | 'parent__isMigrated'
  | 'parent__createdAt'
  | 'parent__expiryDate'
  | 'subdomains'
  | 'subdomainCount'
  | 'resolvedAddress'
  | 'resolvedAddress__id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'ttl'
  | 'isMigrated'
  | 'createdAt'
  | 'owner'
  | 'owner__id'
  | 'registrant'
  | 'registrant__id'
  | 'wrappedOwner'
  | 'wrappedOwner__id'
  | 'expiryDate'
  | 'registration'
  | 'registration__id'
  | 'registration__registrationDate'
  | 'registration__expiryDate'
  | 'registration__cost'
  | 'registration__labelName'
  | 'wrappedDomain'
  | 'wrappedDomain__id'
  | 'wrappedDomain__expiryDate'
  | 'wrappedDomain__fuses'
  | 'wrappedDomain__name'
  | 'events';

export type ExpiryExtended = DomainEvent & {
  /** The unique identifier of the event */
  id: Scalars['ID'];
  /** The domain name associated with the event */
  domain: Domain;
  /** The block number at which the event occurred */
  blockNumber: Scalars['Int'];
  /** The transaction hash of the transaction that triggered the event */
  transactionID: Scalars['Bytes'];
  /** The new expiry date associated with the domain after the extension event */
  expiryDate: Scalars['BigInt'];
};

export type ExpiryExtended_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ExpiryExtended_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ExpiryExtended_filter>>>;
};

export type ExpiryExtended_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__subdomainCount'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'domain__expiryDate'
  | 'blockNumber'
  | 'transactionID'
  | 'expiryDate';

export type FusesSet = DomainEvent & {
  /** The unique identifier of the event */
  id: Scalars['ID'];
  /** The domain name associated with the event */
  domain: Domain;
  /** The block number at which the event occurred */
  blockNumber: Scalars['Int'];
  /** The transaction hash of the transaction that triggered the event */
  transactionID: Scalars['Bytes'];
  /** The number of fuses associated with the domain after the set event */
  fuses: Scalars['Int'];
};

export type FusesSet_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  fuses?: InputMaybe<Scalars['Int']>;
  fuses_not?: InputMaybe<Scalars['Int']>;
  fuses_gt?: InputMaybe<Scalars['Int']>;
  fuses_lt?: InputMaybe<Scalars['Int']>;
  fuses_gte?: InputMaybe<Scalars['Int']>;
  fuses_lte?: InputMaybe<Scalars['Int']>;
  fuses_in?: InputMaybe<Array<Scalars['Int']>>;
  fuses_not_in?: InputMaybe<Array<Scalars['Int']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<FusesSet_filter>>>;
  or?: InputMaybe<Array<InputMaybe<FusesSet_filter>>>;
};

export type FusesSet_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__subdomainCount'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'domain__expiryDate'
  | 'blockNumber'
  | 'transactionID'
  | 'fuses';

export type InterfaceChanged = ResolverEvent & {
  /** Concatenation of block number and log ID */
  id: Scalars['ID'];
  /** Used to derive relationships to Resolvers */
  resolver: Resolver;
  /** The block number in which the event occurred */
  blockNumber: Scalars['Int'];
  /** The transaction ID for the transaction in which the event occurred */
  transactionID: Scalars['Bytes'];
  /** The ID of the EIP-1820 interface that was changed */
  interfaceID: Scalars['Bytes'];
  /** The address of the contract that implements the interface */
  implementer: Scalars['Bytes'];
};

export type InterfaceChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  interfaceID?: InputMaybe<Scalars['Bytes']>;
  interfaceID_not?: InputMaybe<Scalars['Bytes']>;
  interfaceID_gt?: InputMaybe<Scalars['Bytes']>;
  interfaceID_lt?: InputMaybe<Scalars['Bytes']>;
  interfaceID_gte?: InputMaybe<Scalars['Bytes']>;
  interfaceID_lte?: InputMaybe<Scalars['Bytes']>;
  interfaceID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  interfaceID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  interfaceID_contains?: InputMaybe<Scalars['Bytes']>;
  interfaceID_not_contains?: InputMaybe<Scalars['Bytes']>;
  implementer?: InputMaybe<Scalars['Bytes']>;
  implementer_not?: InputMaybe<Scalars['Bytes']>;
  implementer_gt?: InputMaybe<Scalars['Bytes']>;
  implementer_lt?: InputMaybe<Scalars['Bytes']>;
  implementer_gte?: InputMaybe<Scalars['Bytes']>;
  implementer_lte?: InputMaybe<Scalars['Bytes']>;
  implementer_in?: InputMaybe<Array<Scalars['Bytes']>>;
  implementer_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  implementer_contains?: InputMaybe<Scalars['Bytes']>;
  implementer_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<InterfaceChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<InterfaceChanged_filter>>>;
};

export type InterfaceChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'interfaceID'
  | 'implementer';

export type MulticoinAddrChanged = ResolverEvent & {
  /** Unique identifier for the event */
  id: Scalars['ID'];
  /** Resolver associated with this event */
  resolver: Resolver;
  /** Block number in which this event was emitted */
  blockNumber: Scalars['Int'];
  /** Transaction ID in which this event was emitted */
  transactionID: Scalars['Bytes'];
  /** The coin type of the changed address */
  coinType: Scalars['BigInt'];
  /** The new address value for the given coin type */
  addr: Scalars['Bytes'];
};

export type MulticoinAddrChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  coinType?: InputMaybe<Scalars['BigInt']>;
  coinType_not?: InputMaybe<Scalars['BigInt']>;
  coinType_gt?: InputMaybe<Scalars['BigInt']>;
  coinType_lt?: InputMaybe<Scalars['BigInt']>;
  coinType_gte?: InputMaybe<Scalars['BigInt']>;
  coinType_lte?: InputMaybe<Scalars['BigInt']>;
  coinType_in?: InputMaybe<Array<Scalars['BigInt']>>;
  coinType_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  addr?: InputMaybe<Scalars['Bytes']>;
  addr_not?: InputMaybe<Scalars['Bytes']>;
  addr_gt?: InputMaybe<Scalars['Bytes']>;
  addr_lt?: InputMaybe<Scalars['Bytes']>;
  addr_gte?: InputMaybe<Scalars['Bytes']>;
  addr_lte?: InputMaybe<Scalars['Bytes']>;
  addr_in?: InputMaybe<Array<Scalars['Bytes']>>;
  addr_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  addr_contains?: InputMaybe<Scalars['Bytes']>;
  addr_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MulticoinAddrChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<MulticoinAddrChanged_filter>>>;
};

export type MulticoinAddrChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'coinType'
  | 'addr';

export type NameChanged = ResolverEvent & {
  /** Concatenation of block number and log ID */
  id: Scalars['ID'];
  /** Used to derive relationships to Resolvers */
  resolver: Resolver;
  /** Block number where event occurred */
  blockNumber: Scalars['Int'];
  /** Unique transaction ID where event occurred */
  transactionID: Scalars['Bytes'];
  /** New ENS name value */
  name: Scalars['String'];
};

export type NameChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NameChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NameChanged_filter>>>;
};

export type NameChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'name';

export type NameRegistered = RegistrationEvent & {
  /** The unique identifier of the NameRegistered event */
  id: Scalars['ID'];
  /** The registration associated with the event */
  registration: Registration;
  /** The block number of the event */
  blockNumber: Scalars['Int'];
  /** The transaction ID associated with the event */
  transactionID: Scalars['Bytes'];
  /** The account that registered the name */
  registrant: Account;
  /** The expiry date of the registration */
  expiryDate: Scalars['BigInt'];
};

export type NameRegistered_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  registrant?: InputMaybe<Scalars['String']>;
  registrant_not?: InputMaybe<Scalars['String']>;
  registrant_gt?: InputMaybe<Scalars['String']>;
  registrant_lt?: InputMaybe<Scalars['String']>;
  registrant_gte?: InputMaybe<Scalars['String']>;
  registrant_lte?: InputMaybe<Scalars['String']>;
  registrant_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_not_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_contains?: InputMaybe<Scalars['String']>;
  registrant_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_contains?: InputMaybe<Scalars['String']>;
  registrant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_starts_with?: InputMaybe<Scalars['String']>;
  registrant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_ends_with?: InputMaybe<Scalars['String']>;
  registrant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_?: InputMaybe<Account_filter>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NameRegistered_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NameRegistered_filter>>>;
};

export type NameRegistered_orderBy =
  | 'id'
  | 'registration'
  | 'registration__id'
  | 'registration__registrationDate'
  | 'registration__expiryDate'
  | 'registration__cost'
  | 'registration__labelName'
  | 'blockNumber'
  | 'transactionID'
  | 'registrant'
  | 'registrant__id'
  | 'expiryDate';

export type NameRenewed = RegistrationEvent & {
  /** The unique identifier of the NameRenewed event */
  id: Scalars['ID'];
  /** The registration associated with the event */
  registration: Registration;
  /** The block number of the event */
  blockNumber: Scalars['Int'];
  /** The transaction ID associated with the event */
  transactionID: Scalars['Bytes'];
  /** The new expiry date of the registration */
  expiryDate: Scalars['BigInt'];
};

export type NameRenewed_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NameRenewed_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NameRenewed_filter>>>;
};

export type NameRenewed_orderBy =
  | 'id'
  | 'registration'
  | 'registration__id'
  | 'registration__registrationDate'
  | 'registration__expiryDate'
  | 'registration__cost'
  | 'registration__labelName'
  | 'blockNumber'
  | 'transactionID'
  | 'expiryDate';

export type NameTransferred = RegistrationEvent & {
  /** The ID of the event */
  id: Scalars['ID'];
  /** The registration associated with the event */
  registration: Registration;
  /** The block number of the event */
  blockNumber: Scalars['Int'];
  /** The transaction ID of the event */
  transactionID: Scalars['Bytes'];
  /** The new owner of the domain */
  newOwner: Account;
};

export type NameTransferred_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  newOwner?: InputMaybe<Scalars['String']>;
  newOwner_not?: InputMaybe<Scalars['String']>;
  newOwner_gt?: InputMaybe<Scalars['String']>;
  newOwner_lt?: InputMaybe<Scalars['String']>;
  newOwner_gte?: InputMaybe<Scalars['String']>;
  newOwner_lte?: InputMaybe<Scalars['String']>;
  newOwner_in?: InputMaybe<Array<Scalars['String']>>;
  newOwner_not_in?: InputMaybe<Array<Scalars['String']>>;
  newOwner_contains?: InputMaybe<Scalars['String']>;
  newOwner_contains_nocase?: InputMaybe<Scalars['String']>;
  newOwner_not_contains?: InputMaybe<Scalars['String']>;
  newOwner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  newOwner_starts_with?: InputMaybe<Scalars['String']>;
  newOwner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_not_starts_with?: InputMaybe<Scalars['String']>;
  newOwner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_ends_with?: InputMaybe<Scalars['String']>;
  newOwner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_not_ends_with?: InputMaybe<Scalars['String']>;
  newOwner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  newOwner_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NameTransferred_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NameTransferred_filter>>>;
};

export type NameTransferred_orderBy =
  | 'id'
  | 'registration'
  | 'registration__id'
  | 'registration__registrationDate'
  | 'registration__expiryDate'
  | 'registration__cost'
  | 'registration__labelName'
  | 'blockNumber'
  | 'transactionID'
  | 'newOwner'
  | 'newOwner__id';

export type NameUnwrapped = DomainEvent & {
  /** The unique identifier of the event */
  id: Scalars['ID'];
  /** The domain name associated with the event */
  domain: Domain;
  /** The block number at which the event occurred */
  blockNumber: Scalars['Int'];
  /** The transaction hash of the transaction that triggered the event */
  transactionID: Scalars['Bytes'];
  /** The account that owns the domain after it was unwrapped */
  owner: Account;
};

export type NameUnwrapped_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NameUnwrapped_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NameUnwrapped_filter>>>;
};

export type NameUnwrapped_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__subdomainCount'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'domain__expiryDate'
  | 'blockNumber'
  | 'transactionID'
  | 'owner'
  | 'owner__id';

export type NameWrapped = DomainEvent & {
  /** The unique identifier of the wrapped domain */
  id: Scalars['ID'];
  /** The domain name associated with the wrapped domain */
  domain: Domain;
  /** The block number at which the wrapped domain was wrapped */
  blockNumber: Scalars['Int'];
  /** The transaction hash of the transaction that wrapped the domain */
  transactionID: Scalars['Bytes'];
  /** The human-readable name of the wrapped domain */
  name?: Maybe<Scalars['String']>;
  /** The number of fuses associated with the wrapped domain */
  fuses: Scalars['Int'];
  /** The account that owns the wrapped domain */
  owner: Account;
  /** The expiry date of the wrapped domain registration */
  expiryDate: Scalars['BigInt'];
};

export type NameWrapped_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  fuses?: InputMaybe<Scalars['Int']>;
  fuses_not?: InputMaybe<Scalars['Int']>;
  fuses_gt?: InputMaybe<Scalars['Int']>;
  fuses_lt?: InputMaybe<Scalars['Int']>;
  fuses_gte?: InputMaybe<Scalars['Int']>;
  fuses_lte?: InputMaybe<Scalars['Int']>;
  fuses_in?: InputMaybe<Array<Scalars['Int']>>;
  fuses_not_in?: InputMaybe<Array<Scalars['Int']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NameWrapped_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NameWrapped_filter>>>;
};

export type NameWrapped_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__subdomainCount'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'domain__expiryDate'
  | 'blockNumber'
  | 'transactionID'
  | 'name'
  | 'fuses'
  | 'owner'
  | 'owner__id'
  | 'expiryDate';

export type NewOwner = DomainEvent & {
  /** The unique identifier of the event */
  id: Scalars['ID'];
  /** The parent domain of the domain name associated with the event */
  parentDomain: Domain;
  /** The domain name associated with the event */
  domain: Domain;
  /** The block number at which the event occurred */
  blockNumber: Scalars['Int'];
  /** The transaction hash of the transaction that triggered the event */
  transactionID: Scalars['Bytes'];
  /** The new account that owns the domain */
  owner: Account;
};

export type NewOwner_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  parentDomain?: InputMaybe<Scalars['String']>;
  parentDomain_not?: InputMaybe<Scalars['String']>;
  parentDomain_gt?: InputMaybe<Scalars['String']>;
  parentDomain_lt?: InputMaybe<Scalars['String']>;
  parentDomain_gte?: InputMaybe<Scalars['String']>;
  parentDomain_lte?: InputMaybe<Scalars['String']>;
  parentDomain_in?: InputMaybe<Array<Scalars['String']>>;
  parentDomain_not_in?: InputMaybe<Array<Scalars['String']>>;
  parentDomain_contains?: InputMaybe<Scalars['String']>;
  parentDomain_contains_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_not_contains?: InputMaybe<Scalars['String']>;
  parentDomain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_starts_with?: InputMaybe<Scalars['String']>;
  parentDomain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_not_starts_with?: InputMaybe<Scalars['String']>;
  parentDomain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_ends_with?: InputMaybe<Scalars['String']>;
  parentDomain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_not_ends_with?: InputMaybe<Scalars['String']>;
  parentDomain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  parentDomain_?: InputMaybe<Domain_filter>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NewOwner_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NewOwner_filter>>>;
};

export type NewOwner_orderBy =
  | 'id'
  | 'parentDomain'
  | 'parentDomain__id'
  | 'parentDomain__name'
  | 'parentDomain__labelName'
  | 'parentDomain__labelhash'
  | 'parentDomain__subdomainCount'
  | 'parentDomain__ttl'
  | 'parentDomain__isMigrated'
  | 'parentDomain__createdAt'
  | 'parentDomain__expiryDate'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__subdomainCount'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'domain__expiryDate'
  | 'blockNumber'
  | 'transactionID'
  | 'owner'
  | 'owner__id';

export type NewResolver = DomainEvent & {
  /** The unique identifier of the event */
  id: Scalars['ID'];
  /** The domain name associated with the event */
  domain: Domain;
  /** The block number at which the event occurred */
  blockNumber: Scalars['Int'];
  /** The transaction hash of the transaction that triggered the event */
  transactionID: Scalars['Bytes'];
  /** The new resolver contract address associated with the domain */
  resolver: Resolver;
};

export type NewResolver_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NewResolver_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NewResolver_filter>>>;
};

export type NewResolver_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__subdomainCount'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'domain__expiryDate'
  | 'blockNumber'
  | 'transactionID'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash';

export type NewTTL = DomainEvent & {
  /** The unique identifier of the event */
  id: Scalars['ID'];
  /** The domain name associated with the event */
  domain: Domain;
  /** The block number at which the event occurred */
  blockNumber: Scalars['Int'];
  /** The transaction hash of the transaction that triggered the event */
  transactionID: Scalars['Bytes'];
  /** The new TTL value (in seconds) associated with the domain */
  ttl: Scalars['BigInt'];
};

export type NewTTL_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  ttl?: InputMaybe<Scalars['BigInt']>;
  ttl_not?: InputMaybe<Scalars['BigInt']>;
  ttl_gt?: InputMaybe<Scalars['BigInt']>;
  ttl_lt?: InputMaybe<Scalars['BigInt']>;
  ttl_gte?: InputMaybe<Scalars['BigInt']>;
  ttl_lte?: InputMaybe<Scalars['BigInt']>;
  ttl_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ttl_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NewTTL_filter>>>;
  or?: InputMaybe<Array<InputMaybe<NewTTL_filter>>>;
};

export type NewTTL_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__subdomainCount'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'domain__expiryDate'
  | 'blockNumber'
  | 'transactionID'
  | 'ttl';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type PubkeyChanged = ResolverEvent & {
  /** Concatenation of block number and log ID */
  id: Scalars['ID'];
  /** Used to derive relationships to Resolvers */
  resolver: Resolver;
  /** Block number of the Ethereum block where the event occurred */
  blockNumber: Scalars['Int'];
  /** Transaction hash of the Ethereum transaction where the event occurred */
  transactionID: Scalars['Bytes'];
  /** The x-coordinate of the new public key */
  x: Scalars['Bytes'];
  /** The y-coordinate of the new public key */
  y: Scalars['Bytes'];
};

export type PubkeyChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  x?: InputMaybe<Scalars['Bytes']>;
  x_not?: InputMaybe<Scalars['Bytes']>;
  x_gt?: InputMaybe<Scalars['Bytes']>;
  x_lt?: InputMaybe<Scalars['Bytes']>;
  x_gte?: InputMaybe<Scalars['Bytes']>;
  x_lte?: InputMaybe<Scalars['Bytes']>;
  x_in?: InputMaybe<Array<Scalars['Bytes']>>;
  x_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  x_contains?: InputMaybe<Scalars['Bytes']>;
  x_not_contains?: InputMaybe<Scalars['Bytes']>;
  y?: InputMaybe<Scalars['Bytes']>;
  y_not?: InputMaybe<Scalars['Bytes']>;
  y_gt?: InputMaybe<Scalars['Bytes']>;
  y_lt?: InputMaybe<Scalars['Bytes']>;
  y_gte?: InputMaybe<Scalars['Bytes']>;
  y_lte?: InputMaybe<Scalars['Bytes']>;
  y_in?: InputMaybe<Array<Scalars['Bytes']>>;
  y_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  y_contains?: InputMaybe<Scalars['Bytes']>;
  y_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PubkeyChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<PubkeyChanged_filter>>>;
};

export type PubkeyChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'x'
  | 'y';

export type Query = {
  domain?: Maybe<Domain>;
  domains: Array<Domain>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  newOwner?: Maybe<NewOwner>;
  newOwners: Array<NewOwner>;
  newResolver?: Maybe<NewResolver>;
  newResolvers: Array<NewResolver>;
  newTTL?: Maybe<NewTTL>;
  newTTLs: Array<NewTTL>;
  wrappedTransfer?: Maybe<WrappedTransfer>;
  wrappedTransfers: Array<WrappedTransfer>;
  nameWrapped?: Maybe<NameWrapped>;
  nameWrappeds: Array<NameWrapped>;
  nameUnwrapped?: Maybe<NameUnwrapped>;
  nameUnwrappeds: Array<NameUnwrapped>;
  fusesSet?: Maybe<FusesSet>;
  fusesSets: Array<FusesSet>;
  expiryExtended?: Maybe<ExpiryExtended>;
  expiryExtendeds: Array<ExpiryExtended>;
  registration?: Maybe<Registration>;
  registrations: Array<Registration>;
  nameRegistered?: Maybe<NameRegistered>;
  nameRegistereds: Array<NameRegistered>;
  nameRenewed?: Maybe<NameRenewed>;
  nameReneweds: Array<NameRenewed>;
  nameTransferred?: Maybe<NameTransferred>;
  nameTransferreds: Array<NameTransferred>;
  wrappedDomain?: Maybe<WrappedDomain>;
  wrappedDomains: Array<WrappedDomain>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  resolver?: Maybe<Resolver>;
  resolvers: Array<Resolver>;
  addrChanged?: Maybe<AddrChanged>;
  addrChangeds: Array<AddrChanged>;
  multicoinAddrChanged?: Maybe<MulticoinAddrChanged>;
  multicoinAddrChangeds: Array<MulticoinAddrChanged>;
  nameChanged?: Maybe<NameChanged>;
  nameChangeds: Array<NameChanged>;
  abiChanged?: Maybe<AbiChanged>;
  abiChangeds: Array<AbiChanged>;
  pubkeyChanged?: Maybe<PubkeyChanged>;
  pubkeyChangeds: Array<PubkeyChanged>;
  textChanged?: Maybe<TextChanged>;
  textChangeds: Array<TextChanged>;
  contenthashChanged?: Maybe<ContenthashChanged>;
  contenthashChangeds: Array<ContenthashChanged>;
  interfaceChanged?: Maybe<InterfaceChanged>;
  interfaceChangeds: Array<InterfaceChanged>;
  authorisationChanged?: Maybe<AuthorisationChanged>;
  authorisationChangeds: Array<AuthorisationChanged>;
  versionChanged?: Maybe<VersionChanged>;
  versionChangeds: Array<VersionChanged>;
  domainEvent?: Maybe<DomainEvent>;
  domainEvents: Array<DomainEvent>;
  registrationEvent?: Maybe<RegistrationEvent>;
  registrationEvents: Array<RegistrationEvent>;
  resolverEvent?: Maybe<ResolverEvent>;
  resolverEvents: Array<ResolverEvent>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerydomainArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Domain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Domain_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewOwnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewOwnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewOwner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewOwner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewResolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewResolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewResolver_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewResolver_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewTTLArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynewTTLsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewTTL_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewTTL_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywrappedTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywrappedTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WrappedTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WrappedTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameWrappedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameWrappedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameWrapped_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameWrapped_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameUnwrappedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameUnwrappedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameUnwrapped_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameUnwrapped_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfusesSetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryfusesSetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FusesSet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FusesSet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexpiryExtendedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryexpiryExtendedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExpiryExtended_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExpiryExtended_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregistrationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregistrationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Registration_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Registration_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameRegisteredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameRegisteredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameRegistered_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameRegistered_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameRenewedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameRenewedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameRenewed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameRenewed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameTransferredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywrappedDomainArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerywrappedDomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WrappedDomain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WrappedDomain_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Resolver_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Resolver_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryaddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddrChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AddrChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymulticoinAddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerymulticoinAddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MulticoinAddrChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MulticoinAddrChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerynameChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryabiChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryabiChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AbiChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AbiChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypubkeyChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypubkeyChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PubkeyChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PubkeyChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytextChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerytextChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TextChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TextChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontenthashChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerycontenthashChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContenthashChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ContenthashChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterfaceChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryinterfaceChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterfaceChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterfaceChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryauthorisationChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryauthorisationChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorisationChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AuthorisationChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryversionChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryversionChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VersionChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VersionChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydomainEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerydomainEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DomainEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DomainEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregistrationEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryregistrationEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RegistrationEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegistrationEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolverEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryresolverEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ResolverEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Registration = {
  /** The unique identifier of the registration */
  id: Scalars['ID'];
  /** The domain name associated with the registration */
  domain: Domain;
  /** The registration date of the domain */
  registrationDate: Scalars['BigInt'];
  /** The expiry date of the domain */
  expiryDate: Scalars['BigInt'];
  /** The cost associated with the domain registration */
  cost?: Maybe<Scalars['BigInt']>;
  /** The account that registered the domain */
  registrant: Account;
  /** The human-readable label name associated with the domain registration */
  labelName?: Maybe<Scalars['String']>;
  /** The events associated with the domain registration */
  events: Array<RegistrationEvent>;
};


export type RegistrationeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RegistrationEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegistrationEvent_filter>;
};

export type RegistrationEvent = {
  /** The unique identifier of the registration event */
  id: Scalars['ID'];
  /** The registration associated with the event */
  registration: Registration;
  /** The block number of the event */
  blockNumber: Scalars['Int'];
  /** The transaction ID associated with the event */
  transactionID: Scalars['Bytes'];
};

export type RegistrationEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  registration?: InputMaybe<Scalars['String']>;
  registration_not?: InputMaybe<Scalars['String']>;
  registration_gt?: InputMaybe<Scalars['String']>;
  registration_lt?: InputMaybe<Scalars['String']>;
  registration_gte?: InputMaybe<Scalars['String']>;
  registration_lte?: InputMaybe<Scalars['String']>;
  registration_in?: InputMaybe<Array<Scalars['String']>>;
  registration_not_in?: InputMaybe<Array<Scalars['String']>>;
  registration_contains?: InputMaybe<Scalars['String']>;
  registration_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_not_contains?: InputMaybe<Scalars['String']>;
  registration_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registration_starts_with?: InputMaybe<Scalars['String']>;
  registration_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_starts_with?: InputMaybe<Scalars['String']>;
  registration_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registration_ends_with?: InputMaybe<Scalars['String']>;
  registration_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_not_ends_with?: InputMaybe<Scalars['String']>;
  registration_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registration_?: InputMaybe<Registration_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<RegistrationEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<RegistrationEvent_filter>>>;
};

export type RegistrationEvent_orderBy =
  | 'id'
  | 'registration'
  | 'registration__id'
  | 'registration__registrationDate'
  | 'registration__expiryDate'
  | 'registration__cost'
  | 'registration__labelName'
  | 'blockNumber'
  | 'transactionID';

export type Registration_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  registrationDate?: InputMaybe<Scalars['BigInt']>;
  registrationDate_not?: InputMaybe<Scalars['BigInt']>;
  registrationDate_gt?: InputMaybe<Scalars['BigInt']>;
  registrationDate_lt?: InputMaybe<Scalars['BigInt']>;
  registrationDate_gte?: InputMaybe<Scalars['BigInt']>;
  registrationDate_lte?: InputMaybe<Scalars['BigInt']>;
  registrationDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registrationDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cost?: InputMaybe<Scalars['BigInt']>;
  cost_not?: InputMaybe<Scalars['BigInt']>;
  cost_gt?: InputMaybe<Scalars['BigInt']>;
  cost_lt?: InputMaybe<Scalars['BigInt']>;
  cost_gte?: InputMaybe<Scalars['BigInt']>;
  cost_lte?: InputMaybe<Scalars['BigInt']>;
  cost_in?: InputMaybe<Array<Scalars['BigInt']>>;
  cost_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registrant?: InputMaybe<Scalars['String']>;
  registrant_not?: InputMaybe<Scalars['String']>;
  registrant_gt?: InputMaybe<Scalars['String']>;
  registrant_lt?: InputMaybe<Scalars['String']>;
  registrant_gte?: InputMaybe<Scalars['String']>;
  registrant_lte?: InputMaybe<Scalars['String']>;
  registrant_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_not_in?: InputMaybe<Array<Scalars['String']>>;
  registrant_contains?: InputMaybe<Scalars['String']>;
  registrant_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_contains?: InputMaybe<Scalars['String']>;
  registrant_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registrant_starts_with?: InputMaybe<Scalars['String']>;
  registrant_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with?: InputMaybe<Scalars['String']>;
  registrant_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_ends_with?: InputMaybe<Scalars['String']>;
  registrant_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with?: InputMaybe<Scalars['String']>;
  registrant_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrant_?: InputMaybe<Account_filter>;
  labelName?: InputMaybe<Scalars['String']>;
  labelName_not?: InputMaybe<Scalars['String']>;
  labelName_gt?: InputMaybe<Scalars['String']>;
  labelName_lt?: InputMaybe<Scalars['String']>;
  labelName_gte?: InputMaybe<Scalars['String']>;
  labelName_lte?: InputMaybe<Scalars['String']>;
  labelName_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_not_in?: InputMaybe<Array<Scalars['String']>>;
  labelName_contains?: InputMaybe<Scalars['String']>;
  labelName_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_contains?: InputMaybe<Scalars['String']>;
  labelName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  labelName_starts_with?: InputMaybe<Scalars['String']>;
  labelName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with?: InputMaybe<Scalars['String']>;
  labelName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_ends_with?: InputMaybe<Scalars['String']>;
  labelName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with?: InputMaybe<Scalars['String']>;
  labelName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  events_?: InputMaybe<RegistrationEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Registration_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Registration_filter>>>;
};

export type Registration_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__subdomainCount'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'domain__expiryDate'
  | 'registrationDate'
  | 'expiryDate'
  | 'cost'
  | 'registrant'
  | 'registrant__id'
  | 'labelName'
  | 'events';

export type Resolver = {
  /** The unique identifier for this resolver, which is a concatenation of the resolver address and the domain namehash */
  id: Scalars['ID'];
  /** The domain that this resolver is associated with */
  domain?: Maybe<Domain>;
  /** The address of the resolver contract */
  address: Scalars['Bytes'];
  /** The current value of the 'addr' record for this resolver, as determined by the associated events */
  addr?: Maybe<Account>;
  /** The content hash for this resolver, in binary format */
  contentHash?: Maybe<Scalars['Bytes']>;
  /** The set of observed text record keys for this resolver */
  texts?: Maybe<Array<Scalars['String']>>;
  /** The set of observed SLIP-44 coin types for this resolver */
  coinTypes?: Maybe<Array<Scalars['BigInt']>>;
  /** The events associated with this resolver */
  events: Array<ResolverEvent>;
};


export type ResolvereventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ResolverEvent_filter>;
};

export type ResolverEvent = {
  /** Concatenation of block number and log ID */
  id: Scalars['ID'];
  /** Used to derive relationships to Resolvers */
  resolver: Resolver;
  /** The block number that the event occurred on */
  blockNumber: Scalars['Int'];
  /** The transaction hash of the event */
  transactionID: Scalars['Bytes'];
};

export type ResolverEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ResolverEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<ResolverEvent_filter>>>;
};

export type ResolverEvent_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID';

export type Resolver_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_gt?: InputMaybe<Scalars['Bytes']>;
  address_lt?: InputMaybe<Scalars['Bytes']>;
  address_gte?: InputMaybe<Scalars['Bytes']>;
  address_lte?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  addr?: InputMaybe<Scalars['String']>;
  addr_not?: InputMaybe<Scalars['String']>;
  addr_gt?: InputMaybe<Scalars['String']>;
  addr_lt?: InputMaybe<Scalars['String']>;
  addr_gte?: InputMaybe<Scalars['String']>;
  addr_lte?: InputMaybe<Scalars['String']>;
  addr_in?: InputMaybe<Array<Scalars['String']>>;
  addr_not_in?: InputMaybe<Array<Scalars['String']>>;
  addr_contains?: InputMaybe<Scalars['String']>;
  addr_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_not_contains?: InputMaybe<Scalars['String']>;
  addr_not_contains_nocase?: InputMaybe<Scalars['String']>;
  addr_starts_with?: InputMaybe<Scalars['String']>;
  addr_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_starts_with?: InputMaybe<Scalars['String']>;
  addr_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  addr_ends_with?: InputMaybe<Scalars['String']>;
  addr_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_not_ends_with?: InputMaybe<Scalars['String']>;
  addr_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  addr_?: InputMaybe<Account_filter>;
  contentHash?: InputMaybe<Scalars['Bytes']>;
  contentHash_not?: InputMaybe<Scalars['Bytes']>;
  contentHash_gt?: InputMaybe<Scalars['Bytes']>;
  contentHash_lt?: InputMaybe<Scalars['Bytes']>;
  contentHash_gte?: InputMaybe<Scalars['Bytes']>;
  contentHash_lte?: InputMaybe<Scalars['Bytes']>;
  contentHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contentHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contentHash_contains?: InputMaybe<Scalars['Bytes']>;
  contentHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  texts?: InputMaybe<Array<Scalars['String']>>;
  texts_not?: InputMaybe<Array<Scalars['String']>>;
  texts_contains?: InputMaybe<Array<Scalars['String']>>;
  texts_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  texts_not_contains?: InputMaybe<Array<Scalars['String']>>;
  texts_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  coinTypes?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_not?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  coinTypes_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  events_?: InputMaybe<ResolverEvent_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Resolver_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Resolver_filter>>>;
};

export type Resolver_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__subdomainCount'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'domain__expiryDate'
  | 'address'
  | 'addr'
  | 'addr__id'
  | 'contentHash'
  | 'texts'
  | 'coinTypes'
  | 'events';

export type Subscription = {
  domain?: Maybe<Domain>;
  domains: Array<Domain>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  newOwner?: Maybe<NewOwner>;
  newOwners: Array<NewOwner>;
  newResolver?: Maybe<NewResolver>;
  newResolvers: Array<NewResolver>;
  newTTL?: Maybe<NewTTL>;
  newTTLs: Array<NewTTL>;
  wrappedTransfer?: Maybe<WrappedTransfer>;
  wrappedTransfers: Array<WrappedTransfer>;
  nameWrapped?: Maybe<NameWrapped>;
  nameWrappeds: Array<NameWrapped>;
  nameUnwrapped?: Maybe<NameUnwrapped>;
  nameUnwrappeds: Array<NameUnwrapped>;
  fusesSet?: Maybe<FusesSet>;
  fusesSets: Array<FusesSet>;
  expiryExtended?: Maybe<ExpiryExtended>;
  expiryExtendeds: Array<ExpiryExtended>;
  registration?: Maybe<Registration>;
  registrations: Array<Registration>;
  nameRegistered?: Maybe<NameRegistered>;
  nameRegistereds: Array<NameRegistered>;
  nameRenewed?: Maybe<NameRenewed>;
  nameReneweds: Array<NameRenewed>;
  nameTransferred?: Maybe<NameTransferred>;
  nameTransferreds: Array<NameTransferred>;
  wrappedDomain?: Maybe<WrappedDomain>;
  wrappedDomains: Array<WrappedDomain>;
  account?: Maybe<Account>;
  accounts: Array<Account>;
  resolver?: Maybe<Resolver>;
  resolvers: Array<Resolver>;
  addrChanged?: Maybe<AddrChanged>;
  addrChangeds: Array<AddrChanged>;
  multicoinAddrChanged?: Maybe<MulticoinAddrChanged>;
  multicoinAddrChangeds: Array<MulticoinAddrChanged>;
  nameChanged?: Maybe<NameChanged>;
  nameChangeds: Array<NameChanged>;
  abiChanged?: Maybe<AbiChanged>;
  abiChangeds: Array<AbiChanged>;
  pubkeyChanged?: Maybe<PubkeyChanged>;
  pubkeyChangeds: Array<PubkeyChanged>;
  textChanged?: Maybe<TextChanged>;
  textChangeds: Array<TextChanged>;
  contenthashChanged?: Maybe<ContenthashChanged>;
  contenthashChangeds: Array<ContenthashChanged>;
  interfaceChanged?: Maybe<InterfaceChanged>;
  interfaceChangeds: Array<InterfaceChanged>;
  authorisationChanged?: Maybe<AuthorisationChanged>;
  authorisationChangeds: Array<AuthorisationChanged>;
  versionChanged?: Maybe<VersionChanged>;
  versionChangeds: Array<VersionChanged>;
  domainEvent?: Maybe<DomainEvent>;
  domainEvents: Array<DomainEvent>;
  registrationEvent?: Maybe<RegistrationEvent>;
  registrationEvents: Array<RegistrationEvent>;
  resolverEvent?: Maybe<ResolverEvent>;
  resolverEvents: Array<ResolverEvent>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptiondomainArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Domain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Domain_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Transfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Transfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewOwnerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewOwnersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewOwner_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewOwner_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewResolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewResolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewResolver_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewResolver_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewTTLArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnewTTLsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NewTTL_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NewTTL_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwrappedTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwrappedTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WrappedTransfer_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WrappedTransfer_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameWrappedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameWrappedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameWrapped_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameWrapped_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameUnwrappedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameUnwrappedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameUnwrapped_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameUnwrapped_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfusesSetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionfusesSetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FusesSet_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<FusesSet_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexpiryExtendedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionexpiryExtendedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ExpiryExtended_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ExpiryExtended_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregistrationArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregistrationsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Registration_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Registration_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameRegisteredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameRegisteredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameRegistered_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameRegistered_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameRenewedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameRenewedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameRenewed_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameRenewed_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameTransferredArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameTransferredsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameTransferred_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameTransferred_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwrappedDomainArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionwrappedDomainsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<WrappedDomain_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<WrappedDomain_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaccountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Account_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Account_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolverArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolversArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Resolver_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Resolver_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionaddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AddrChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AddrChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmulticoinAddrChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionmulticoinAddrChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<MulticoinAddrChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<MulticoinAddrChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionnameChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NameChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<NameChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionabiChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionabiChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AbiChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AbiChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpubkeyChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpubkeyChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PubkeyChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PubkeyChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontextChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiontextChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TextChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<TextChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontenthashChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioncontenthashChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ContenthashChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ContenthashChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterfaceChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptioninterfaceChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<InterfaceChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<InterfaceChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionauthorisationChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionauthorisationChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<AuthorisationChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<AuthorisationChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionversionChangedArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionversionChangedsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<VersionChanged_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<VersionChanged_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondomainEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiondomainEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<DomainEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<DomainEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregistrationEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionregistrationEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<RegistrationEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<RegistrationEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolverEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionresolverEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ResolverEvent_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<ResolverEvent_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type TextChanged = ResolverEvent & {
  /** Concatenation of block number and log ID */
  id: Scalars['ID'];
  /** Used to derive relationships to Resolvers */
  resolver: Resolver;
  /** Block number of the Ethereum block in which the event occurred */
  blockNumber: Scalars['Int'];
  /** Hash of the Ethereum transaction in which the event occurred */
  transactionID: Scalars['Bytes'];
  /** The key of the text record that was changed */
  key: Scalars['String'];
  /** The new value of the text record that was changed */
  value?: Maybe<Scalars['String']>;
};

export type TextChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  key?: InputMaybe<Scalars['String']>;
  key_not?: InputMaybe<Scalars['String']>;
  key_gt?: InputMaybe<Scalars['String']>;
  key_lt?: InputMaybe<Scalars['String']>;
  key_gte?: InputMaybe<Scalars['String']>;
  key_lte?: InputMaybe<Scalars['String']>;
  key_in?: InputMaybe<Array<Scalars['String']>>;
  key_not_in?: InputMaybe<Array<Scalars['String']>>;
  key_contains?: InputMaybe<Scalars['String']>;
  key_contains_nocase?: InputMaybe<Scalars['String']>;
  key_not_contains?: InputMaybe<Scalars['String']>;
  key_not_contains_nocase?: InputMaybe<Scalars['String']>;
  key_starts_with?: InputMaybe<Scalars['String']>;
  key_starts_with_nocase?: InputMaybe<Scalars['String']>;
  key_not_starts_with?: InputMaybe<Scalars['String']>;
  key_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  key_ends_with?: InputMaybe<Scalars['String']>;
  key_ends_with_nocase?: InputMaybe<Scalars['String']>;
  key_not_ends_with?: InputMaybe<Scalars['String']>;
  key_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  value_not?: InputMaybe<Scalars['String']>;
  value_gt?: InputMaybe<Scalars['String']>;
  value_lt?: InputMaybe<Scalars['String']>;
  value_gte?: InputMaybe<Scalars['String']>;
  value_lte?: InputMaybe<Scalars['String']>;
  value_in?: InputMaybe<Array<Scalars['String']>>;
  value_not_in?: InputMaybe<Array<Scalars['String']>>;
  value_contains?: InputMaybe<Scalars['String']>;
  value_contains_nocase?: InputMaybe<Scalars['String']>;
  value_not_contains?: InputMaybe<Scalars['String']>;
  value_not_contains_nocase?: InputMaybe<Scalars['String']>;
  value_starts_with?: InputMaybe<Scalars['String']>;
  value_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  value_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value_ends_with?: InputMaybe<Scalars['String']>;
  value_ends_with_nocase?: InputMaybe<Scalars['String']>;
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  value_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TextChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<TextChanged_filter>>>;
};

export type TextChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'key'
  | 'value';

export type Transfer = DomainEvent & {
  /** The unique identifier of the event */
  id: Scalars['ID'];
  /** The domain name associated with the event */
  domain: Domain;
  /** The block number at which the event occurred */
  blockNumber: Scalars['Int'];
  /** The transaction hash of the transaction that triggered the event */
  transactionID: Scalars['Bytes'];
  /** The account that owns the domain after the transfer */
  owner: Account;
};

export type Transfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Transfer_filter>>>;
};

export type Transfer_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__subdomainCount'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'domain__expiryDate'
  | 'blockNumber'
  | 'transactionID'
  | 'owner'
  | 'owner__id';

export type VersionChanged = ResolverEvent & {
  /** Unique identifier for this event */
  id: Scalars['ID'];
  /** The resolver associated with this event */
  resolver: Resolver;
  /** The block number at which the event occurred */
  blockNumber: Scalars['Int'];
  /** The transaction hash associated with the event */
  transactionID: Scalars['Bytes'];
  /** The new version number of the resolver */
  version: Scalars['BigInt'];
};

export type VersionChanged_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  resolver?: InputMaybe<Scalars['String']>;
  resolver_not?: InputMaybe<Scalars['String']>;
  resolver_gt?: InputMaybe<Scalars['String']>;
  resolver_lt?: InputMaybe<Scalars['String']>;
  resolver_gte?: InputMaybe<Scalars['String']>;
  resolver_lte?: InputMaybe<Scalars['String']>;
  resolver_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_not_in?: InputMaybe<Array<Scalars['String']>>;
  resolver_contains?: InputMaybe<Scalars['String']>;
  resolver_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_contains?: InputMaybe<Scalars['String']>;
  resolver_not_contains_nocase?: InputMaybe<Scalars['String']>;
  resolver_starts_with?: InputMaybe<Scalars['String']>;
  resolver_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with?: InputMaybe<Scalars['String']>;
  resolver_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_ends_with?: InputMaybe<Scalars['String']>;
  resolver_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with?: InputMaybe<Scalars['String']>;
  resolver_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  resolver_?: InputMaybe<Resolver_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  version?: InputMaybe<Scalars['BigInt']>;
  version_not?: InputMaybe<Scalars['BigInt']>;
  version_gt?: InputMaybe<Scalars['BigInt']>;
  version_lt?: InputMaybe<Scalars['BigInt']>;
  version_gte?: InputMaybe<Scalars['BigInt']>;
  version_lte?: InputMaybe<Scalars['BigInt']>;
  version_in?: InputMaybe<Array<Scalars['BigInt']>>;
  version_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<VersionChanged_filter>>>;
  or?: InputMaybe<Array<InputMaybe<VersionChanged_filter>>>;
};

export type VersionChanged_orderBy =
  | 'id'
  | 'resolver'
  | 'resolver__id'
  | 'resolver__address'
  | 'resolver__contentHash'
  | 'blockNumber'
  | 'transactionID'
  | 'version';

export type WrappedDomain = {
  /** unique identifier for each instance of the WrappedDomain entity */
  id: Scalars['ID'];
  /** The domain that is wrapped by this WrappedDomain */
  domain: Domain;
  /** The expiry date of the wrapped domain */
  expiryDate: Scalars['BigInt'];
  /** The number of fuses remaining on the wrapped domain */
  fuses: Scalars['Int'];
  /** The account that owns this WrappedDomain */
  owner: Account;
  /** The name of the wrapped domain */
  name?: Maybe<Scalars['String']>;
};

export type WrappedDomain_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  expiryDate?: InputMaybe<Scalars['BigInt']>;
  expiryDate_not?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lt?: InputMaybe<Scalars['BigInt']>;
  expiryDate_gte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_lte?: InputMaybe<Scalars['BigInt']>;
  expiryDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiryDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fuses?: InputMaybe<Scalars['Int']>;
  fuses_not?: InputMaybe<Scalars['Int']>;
  fuses_gt?: InputMaybe<Scalars['Int']>;
  fuses_lt?: InputMaybe<Scalars['Int']>;
  fuses_gte?: InputMaybe<Scalars['Int']>;
  fuses_lte?: InputMaybe<Scalars['Int']>;
  fuses_in?: InputMaybe<Array<Scalars['Int']>>;
  fuses_not_in?: InputMaybe<Array<Scalars['Int']>>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<WrappedDomain_filter>>>;
  or?: InputMaybe<Array<InputMaybe<WrappedDomain_filter>>>;
};

export type WrappedDomain_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__subdomainCount'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'domain__expiryDate'
  | 'expiryDate'
  | 'fuses'
  | 'owner'
  | 'owner__id'
  | 'name';

export type WrappedTransfer = DomainEvent & {
  /** The unique identifier of the event */
  id: Scalars['ID'];
  /** The domain name associated with the event */
  domain: Domain;
  /** The block number at which the event occurred */
  blockNumber: Scalars['Int'];
  /** The transaction hash of the transaction that triggered the event */
  transactionID: Scalars['Bytes'];
  /** The account that owns the wrapped domain after the transfer */
  owner: Account;
};

export type WrappedTransfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  domain?: InputMaybe<Scalars['String']>;
  domain_not?: InputMaybe<Scalars['String']>;
  domain_gt?: InputMaybe<Scalars['String']>;
  domain_lt?: InputMaybe<Scalars['String']>;
  domain_gte?: InputMaybe<Scalars['String']>;
  domain_lte?: InputMaybe<Scalars['String']>;
  domain_in?: InputMaybe<Array<Scalars['String']>>;
  domain_not_in?: InputMaybe<Array<Scalars['String']>>;
  domain_contains?: InputMaybe<Scalars['String']>;
  domain_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_not_contains?: InputMaybe<Scalars['String']>;
  domain_not_contains_nocase?: InputMaybe<Scalars['String']>;
  domain_starts_with?: InputMaybe<Scalars['String']>;
  domain_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_starts_with?: InputMaybe<Scalars['String']>;
  domain_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  domain_ends_with?: InputMaybe<Scalars['String']>;
  domain_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_not_ends_with?: InputMaybe<Scalars['String']>;
  domain_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  domain_?: InputMaybe<Domain_filter>;
  blockNumber?: InputMaybe<Scalars['Int']>;
  blockNumber_not?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  transactionID?: InputMaybe<Scalars['Bytes']>;
  transactionID_not?: InputMaybe<Scalars['Bytes']>;
  transactionID_gt?: InputMaybe<Scalars['Bytes']>;
  transactionID_lt?: InputMaybe<Scalars['Bytes']>;
  transactionID_gte?: InputMaybe<Scalars['Bytes']>;
  transactionID_lte?: InputMaybe<Scalars['Bytes']>;
  transactionID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  transactionID_contains?: InputMaybe<Scalars['Bytes']>;
  transactionID_not_contains?: InputMaybe<Scalars['Bytes']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_not?: InputMaybe<Scalars['String']>;
  owner_gt?: InputMaybe<Scalars['String']>;
  owner_lt?: InputMaybe<Scalars['String']>;
  owner_gte?: InputMaybe<Scalars['String']>;
  owner_lte?: InputMaybe<Scalars['String']>;
  owner_in?: InputMaybe<Array<Scalars['String']>>;
  owner_not_in?: InputMaybe<Array<Scalars['String']>>;
  owner_contains?: InputMaybe<Scalars['String']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_not_contains?: InputMaybe<Scalars['String']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
  owner_starts_with?: InputMaybe<Scalars['String']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_starts_with?: InputMaybe<Scalars['String']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  owner_ends_with?: InputMaybe<Scalars['String']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  owner_?: InputMaybe<Account_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<WrappedTransfer_filter>>>;
  or?: InputMaybe<Array<InputMaybe<WrappedTransfer_filter>>>;
};

export type WrappedTransfer_orderBy =
  | 'id'
  | 'domain'
  | 'domain__id'
  | 'domain__name'
  | 'domain__labelName'
  | 'domain__labelhash'
  | 'domain__subdomainCount'
  | 'domain__ttl'
  | 'domain__isMigrated'
  | 'domain__createdAt'
  | 'domain__expiryDate'
  | 'blockNumber'
  | 'transactionID'
  | 'owner'
  | 'owner__id';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AbiChanged: ResolverTypeWrapper<AbiChanged>;
  AbiChanged_filter: AbiChanged_filter;
  AbiChanged_orderBy: AbiChanged_orderBy;
  Account: ResolverTypeWrapper<Account>;
  Account_filter: Account_filter;
  Account_orderBy: Account_orderBy;
  AddrChanged: ResolverTypeWrapper<AddrChanged>;
  AddrChanged_filter: AddrChanged_filter;
  AddrChanged_orderBy: AddrChanged_orderBy;
  Aggregation_interval: Aggregation_interval;
  AuthorisationChanged: ResolverTypeWrapper<AuthorisationChanged>;
  AuthorisationChanged_filter: AuthorisationChanged_filter;
  AuthorisationChanged_orderBy: AuthorisationChanged_orderBy;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  ContenthashChanged: ResolverTypeWrapper<ContenthashChanged>;
  ContenthashChanged_filter: ContenthashChanged_filter;
  ContenthashChanged_orderBy: ContenthashChanged_orderBy;
  Domain: ResolverTypeWrapper<Domain>;
  DomainEvent: ResolversTypes['ExpiryExtended'] | ResolversTypes['FusesSet'] | ResolversTypes['NameUnwrapped'] | ResolversTypes['NameWrapped'] | ResolversTypes['NewOwner'] | ResolversTypes['NewResolver'] | ResolversTypes['NewTTL'] | ResolversTypes['Transfer'] | ResolversTypes['WrappedTransfer'];
  DomainEvent_filter: DomainEvent_filter;
  DomainEvent_orderBy: DomainEvent_orderBy;
  Domain_filter: Domain_filter;
  Domain_orderBy: Domain_orderBy;
  ExpiryExtended: ResolverTypeWrapper<ExpiryExtended>;
  ExpiryExtended_filter: ExpiryExtended_filter;
  ExpiryExtended_orderBy: ExpiryExtended_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  FusesSet: ResolverTypeWrapper<FusesSet>;
  FusesSet_filter: FusesSet_filter;
  FusesSet_orderBy: FusesSet_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']>;
  InterfaceChanged: ResolverTypeWrapper<InterfaceChanged>;
  InterfaceChanged_filter: InterfaceChanged_filter;
  InterfaceChanged_orderBy: InterfaceChanged_orderBy;
  MulticoinAddrChanged: ResolverTypeWrapper<MulticoinAddrChanged>;
  MulticoinAddrChanged_filter: MulticoinAddrChanged_filter;
  MulticoinAddrChanged_orderBy: MulticoinAddrChanged_orderBy;
  NameChanged: ResolverTypeWrapper<NameChanged>;
  NameChanged_filter: NameChanged_filter;
  NameChanged_orderBy: NameChanged_orderBy;
  NameRegistered: ResolverTypeWrapper<NameRegistered>;
  NameRegistered_filter: NameRegistered_filter;
  NameRegistered_orderBy: NameRegistered_orderBy;
  NameRenewed: ResolverTypeWrapper<NameRenewed>;
  NameRenewed_filter: NameRenewed_filter;
  NameRenewed_orderBy: NameRenewed_orderBy;
  NameTransferred: ResolverTypeWrapper<NameTransferred>;
  NameTransferred_filter: NameTransferred_filter;
  NameTransferred_orderBy: NameTransferred_orderBy;
  NameUnwrapped: ResolverTypeWrapper<NameUnwrapped>;
  NameUnwrapped_filter: NameUnwrapped_filter;
  NameUnwrapped_orderBy: NameUnwrapped_orderBy;
  NameWrapped: ResolverTypeWrapper<NameWrapped>;
  NameWrapped_filter: NameWrapped_filter;
  NameWrapped_orderBy: NameWrapped_orderBy;
  NewOwner: ResolverTypeWrapper<NewOwner>;
  NewOwner_filter: NewOwner_filter;
  NewOwner_orderBy: NewOwner_orderBy;
  NewResolver: ResolverTypeWrapper<NewResolver>;
  NewResolver_filter: NewResolver_filter;
  NewResolver_orderBy: NewResolver_orderBy;
  NewTTL: ResolverTypeWrapper<NewTTL>;
  NewTTL_filter: NewTTL_filter;
  NewTTL_orderBy: NewTTL_orderBy;
  OrderDirection: OrderDirection;
  PubkeyChanged: ResolverTypeWrapper<PubkeyChanged>;
  PubkeyChanged_filter: PubkeyChanged_filter;
  PubkeyChanged_orderBy: PubkeyChanged_orderBy;
  Query: ResolverTypeWrapper<{}>;
  Registration: ResolverTypeWrapper<Registration>;
  RegistrationEvent: ResolversTypes['NameRegistered'] | ResolversTypes['NameRenewed'] | ResolversTypes['NameTransferred'];
  RegistrationEvent_filter: RegistrationEvent_filter;
  RegistrationEvent_orderBy: RegistrationEvent_orderBy;
  Registration_filter: Registration_filter;
  Registration_orderBy: Registration_orderBy;
  Resolver: ResolverTypeWrapper<Resolver>;
  ResolverEvent: ResolversTypes['AbiChanged'] | ResolversTypes['AddrChanged'] | ResolversTypes['AuthorisationChanged'] | ResolversTypes['ContenthashChanged'] | ResolversTypes['InterfaceChanged'] | ResolversTypes['MulticoinAddrChanged'] | ResolversTypes['NameChanged'] | ResolversTypes['PubkeyChanged'] | ResolversTypes['TextChanged'] | ResolversTypes['VersionChanged'];
  ResolverEvent_filter: ResolverEvent_filter;
  ResolverEvent_orderBy: ResolverEvent_orderBy;
  Resolver_filter: Resolver_filter;
  Resolver_orderBy: Resolver_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  TextChanged: ResolverTypeWrapper<TextChanged>;
  TextChanged_filter: TextChanged_filter;
  TextChanged_orderBy: TextChanged_orderBy;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']>;
  Transfer: ResolverTypeWrapper<Transfer>;
  Transfer_filter: Transfer_filter;
  Transfer_orderBy: Transfer_orderBy;
  VersionChanged: ResolverTypeWrapper<VersionChanged>;
  VersionChanged_filter: VersionChanged_filter;
  VersionChanged_orderBy: VersionChanged_orderBy;
  WrappedDomain: ResolverTypeWrapper<WrappedDomain>;
  WrappedDomain_filter: WrappedDomain_filter;
  WrappedDomain_orderBy: WrappedDomain_orderBy;
  WrappedTransfer: ResolverTypeWrapper<WrappedTransfer>;
  WrappedTransfer_filter: WrappedTransfer_filter;
  WrappedTransfer_orderBy: WrappedTransfer_orderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AbiChanged: AbiChanged;
  AbiChanged_filter: AbiChanged_filter;
  Account: Account;
  Account_filter: Account_filter;
  AddrChanged: AddrChanged;
  AddrChanged_filter: AddrChanged_filter;
  AuthorisationChanged: AuthorisationChanged;
  AuthorisationChanged_filter: AuthorisationChanged_filter;
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bytes: Scalars['Bytes'];
  ContenthashChanged: ContenthashChanged;
  ContenthashChanged_filter: ContenthashChanged_filter;
  Domain: Domain;
  DomainEvent: ResolversParentTypes['ExpiryExtended'] | ResolversParentTypes['FusesSet'] | ResolversParentTypes['NameUnwrapped'] | ResolversParentTypes['NameWrapped'] | ResolversParentTypes['NewOwner'] | ResolversParentTypes['NewResolver'] | ResolversParentTypes['NewTTL'] | ResolversParentTypes['Transfer'] | ResolversParentTypes['WrappedTransfer'];
  DomainEvent_filter: DomainEvent_filter;
  Domain_filter: Domain_filter;
  ExpiryExtended: ExpiryExtended;
  ExpiryExtended_filter: ExpiryExtended_filter;
  Float: Scalars['Float'];
  FusesSet: FusesSet;
  FusesSet_filter: FusesSet_filter;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Int8: Scalars['Int8'];
  InterfaceChanged: InterfaceChanged;
  InterfaceChanged_filter: InterfaceChanged_filter;
  MulticoinAddrChanged: MulticoinAddrChanged;
  MulticoinAddrChanged_filter: MulticoinAddrChanged_filter;
  NameChanged: NameChanged;
  NameChanged_filter: NameChanged_filter;
  NameRegistered: NameRegistered;
  NameRegistered_filter: NameRegistered_filter;
  NameRenewed: NameRenewed;
  NameRenewed_filter: NameRenewed_filter;
  NameTransferred: NameTransferred;
  NameTransferred_filter: NameTransferred_filter;
  NameUnwrapped: NameUnwrapped;
  NameUnwrapped_filter: NameUnwrapped_filter;
  NameWrapped: NameWrapped;
  NameWrapped_filter: NameWrapped_filter;
  NewOwner: NewOwner;
  NewOwner_filter: NewOwner_filter;
  NewResolver: NewResolver;
  NewResolver_filter: NewResolver_filter;
  NewTTL: NewTTL;
  NewTTL_filter: NewTTL_filter;
  PubkeyChanged: PubkeyChanged;
  PubkeyChanged_filter: PubkeyChanged_filter;
  Query: {};
  Registration: Registration;
  RegistrationEvent: ResolversParentTypes['NameRegistered'] | ResolversParentTypes['NameRenewed'] | ResolversParentTypes['NameTransferred'];
  RegistrationEvent_filter: RegistrationEvent_filter;
  Registration_filter: Registration_filter;
  Resolver: Resolver;
  ResolverEvent: ResolversParentTypes['AbiChanged'] | ResolversParentTypes['AddrChanged'] | ResolversParentTypes['AuthorisationChanged'] | ResolversParentTypes['ContenthashChanged'] | ResolversParentTypes['InterfaceChanged'] | ResolversParentTypes['MulticoinAddrChanged'] | ResolversParentTypes['NameChanged'] | ResolversParentTypes['PubkeyChanged'] | ResolversParentTypes['TextChanged'] | ResolversParentTypes['VersionChanged'];
  ResolverEvent_filter: ResolverEvent_filter;
  Resolver_filter: Resolver_filter;
  String: Scalars['String'];
  Subscription: {};
  TextChanged: TextChanged;
  TextChanged_filter: TextChanged_filter;
  Timestamp: Scalars['Timestamp'];
  Transfer: Transfer;
  Transfer_filter: Transfer_filter;
  VersionChanged: VersionChanged;
  VersionChanged_filter: VersionChanged_filter;
  WrappedDomain: WrappedDomain;
  WrappedDomain_filter: WrappedDomain_filter;
  WrappedTransfer: WrappedTransfer;
  WrappedTransfer_filter: WrappedTransfer_filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbiChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AbiChanged'] = ResolversParentTypes['AbiChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  contentType?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccountResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domains?: Resolver<Array<ResolversTypes['Domain']>, ParentType, ContextType, RequireFields<AccountdomainsArgs, 'skip' | 'first'>>;
  wrappedDomains?: Resolver<Maybe<Array<ResolversTypes['WrappedDomain']>>, ParentType, ContextType, RequireFields<AccountwrappedDomainsArgs, 'skip' | 'first'>>;
  registrations?: Resolver<Maybe<Array<ResolversTypes['Registration']>>, ParentType, ContextType, RequireFields<AccountregistrationsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AddrChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AddrChanged'] = ResolversParentTypes['AddrChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  addr?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthorisationChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AuthorisationChanged'] = ResolversParentTypes['AuthorisationChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  target?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  isAuthorized?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type ContenthashChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ContenthashChanged'] = ResolversParentTypes['ContenthashChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DomainResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Domain'] = ResolversParentTypes['Domain']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  labelName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  labelhash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Domain']>, ParentType, ContextType>;
  subdomains?: Resolver<Array<ResolversTypes['Domain']>, ParentType, ContextType, RequireFields<DomainsubdomainsArgs, 'skip' | 'first'>>;
  subdomainCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  resolvedAddress?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  resolver?: Resolver<Maybe<ResolversTypes['Resolver']>, ParentType, ContextType>;
  ttl?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  isMigrated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  registrant?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  wrappedOwner?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  expiryDate?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  registration?: Resolver<Maybe<ResolversTypes['Registration']>, ParentType, ContextType>;
  wrappedDomain?: Resolver<Maybe<ResolversTypes['WrappedDomain']>, ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['DomainEvent']>, ParentType, ContextType, RequireFields<DomaineventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DomainEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DomainEvent'] = ResolversParentTypes['DomainEvent']> = ResolversObject<{
  __resolveType: TypeResolveFn<'ExpiryExtended' | 'FusesSet' | 'NameUnwrapped' | 'NameWrapped' | 'NewOwner' | 'NewResolver' | 'NewTTL' | 'Transfer' | 'WrappedTransfer', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
}>;

export type ExpiryExtendedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ExpiryExtended'] = ResolversParentTypes['ExpiryExtended']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  expiryDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FusesSetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FusesSet'] = ResolversParentTypes['FusesSet']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  fuses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type InterfaceChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['InterfaceChanged'] = ResolversParentTypes['InterfaceChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  interfaceID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  implementer?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MulticoinAddrChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MulticoinAddrChanged'] = ResolversParentTypes['MulticoinAddrChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  coinType?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  addr?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NameChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NameChanged'] = ResolversParentTypes['NameChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NameRegisteredResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NameRegistered'] = ResolversParentTypes['NameRegistered']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  registration?: Resolver<ResolversTypes['Registration'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  registrant?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  expiryDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NameRenewedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NameRenewed'] = ResolversParentTypes['NameRenewed']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  registration?: Resolver<ResolversTypes['Registration'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  expiryDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NameTransferredResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NameTransferred'] = ResolversParentTypes['NameTransferred']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  registration?: Resolver<ResolversTypes['Registration'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  newOwner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NameUnwrappedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NameUnwrapped'] = ResolversParentTypes['NameUnwrapped']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NameWrappedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NameWrapped'] = ResolversParentTypes['NameWrapped']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fuses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  expiryDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NewOwnerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NewOwner'] = ResolversParentTypes['NewOwner']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parentDomain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NewResolverResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NewResolver'] = ResolversParentTypes['NewResolver']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type NewTTLResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['NewTTL'] = ResolversParentTypes['NewTTL']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  ttl?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PubkeyChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PubkeyChanged'] = ResolversParentTypes['PubkeyChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  x?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  y?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  domain?: Resolver<Maybe<ResolversTypes['Domain']>, ParentType, ContextType, RequireFields<QuerydomainArgs, 'id' | 'subgraphError'>>;
  domains?: Resolver<Array<ResolversTypes['Domain']>, ParentType, ContextType, RequireFields<QuerydomainsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transfer?: Resolver<Maybe<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QuerytransferArgs, 'id' | 'subgraphError'>>;
  transfers?: Resolver<Array<ResolversTypes['Transfer']>, ParentType, ContextType, RequireFields<QuerytransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  newOwner?: Resolver<Maybe<ResolversTypes['NewOwner']>, ParentType, ContextType, RequireFields<QuerynewOwnerArgs, 'id' | 'subgraphError'>>;
  newOwners?: Resolver<Array<ResolversTypes['NewOwner']>, ParentType, ContextType, RequireFields<QuerynewOwnersArgs, 'skip' | 'first' | 'subgraphError'>>;
  newResolver?: Resolver<Maybe<ResolversTypes['NewResolver']>, ParentType, ContextType, RequireFields<QuerynewResolverArgs, 'id' | 'subgraphError'>>;
  newResolvers?: Resolver<Array<ResolversTypes['NewResolver']>, ParentType, ContextType, RequireFields<QuerynewResolversArgs, 'skip' | 'first' | 'subgraphError'>>;
  newTTL?: Resolver<Maybe<ResolversTypes['NewTTL']>, ParentType, ContextType, RequireFields<QuerynewTTLArgs, 'id' | 'subgraphError'>>;
  newTTLs?: Resolver<Array<ResolversTypes['NewTTL']>, ParentType, ContextType, RequireFields<QuerynewTTLsArgs, 'skip' | 'first' | 'subgraphError'>>;
  wrappedTransfer?: Resolver<Maybe<ResolversTypes['WrappedTransfer']>, ParentType, ContextType, RequireFields<QuerywrappedTransferArgs, 'id' | 'subgraphError'>>;
  wrappedTransfers?: Resolver<Array<ResolversTypes['WrappedTransfer']>, ParentType, ContextType, RequireFields<QuerywrappedTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameWrapped?: Resolver<Maybe<ResolversTypes['NameWrapped']>, ParentType, ContextType, RequireFields<QuerynameWrappedArgs, 'id' | 'subgraphError'>>;
  nameWrappeds?: Resolver<Array<ResolversTypes['NameWrapped']>, ParentType, ContextType, RequireFields<QuerynameWrappedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameUnwrapped?: Resolver<Maybe<ResolversTypes['NameUnwrapped']>, ParentType, ContextType, RequireFields<QuerynameUnwrappedArgs, 'id' | 'subgraphError'>>;
  nameUnwrappeds?: Resolver<Array<ResolversTypes['NameUnwrapped']>, ParentType, ContextType, RequireFields<QuerynameUnwrappedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  fusesSet?: Resolver<Maybe<ResolversTypes['FusesSet']>, ParentType, ContextType, RequireFields<QueryfusesSetArgs, 'id' | 'subgraphError'>>;
  fusesSets?: Resolver<Array<ResolversTypes['FusesSet']>, ParentType, ContextType, RequireFields<QueryfusesSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  expiryExtended?: Resolver<Maybe<ResolversTypes['ExpiryExtended']>, ParentType, ContextType, RequireFields<QueryexpiryExtendedArgs, 'id' | 'subgraphError'>>;
  expiryExtendeds?: Resolver<Array<ResolversTypes['ExpiryExtended']>, ParentType, ContextType, RequireFields<QueryexpiryExtendedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  registration?: Resolver<Maybe<ResolversTypes['Registration']>, ParentType, ContextType, RequireFields<QueryregistrationArgs, 'id' | 'subgraphError'>>;
  registrations?: Resolver<Array<ResolversTypes['Registration']>, ParentType, ContextType, RequireFields<QueryregistrationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameRegistered?: Resolver<Maybe<ResolversTypes['NameRegistered']>, ParentType, ContextType, RequireFields<QuerynameRegisteredArgs, 'id' | 'subgraphError'>>;
  nameRegistereds?: Resolver<Array<ResolversTypes['NameRegistered']>, ParentType, ContextType, RequireFields<QuerynameRegisteredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameRenewed?: Resolver<Maybe<ResolversTypes['NameRenewed']>, ParentType, ContextType, RequireFields<QuerynameRenewedArgs, 'id' | 'subgraphError'>>;
  nameReneweds?: Resolver<Array<ResolversTypes['NameRenewed']>, ParentType, ContextType, RequireFields<QuerynameRenewedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameTransferred?: Resolver<Maybe<ResolversTypes['NameTransferred']>, ParentType, ContextType, RequireFields<QuerynameTransferredArgs, 'id' | 'subgraphError'>>;
  nameTransferreds?: Resolver<Array<ResolversTypes['NameTransferred']>, ParentType, ContextType, RequireFields<QuerynameTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  wrappedDomain?: Resolver<Maybe<ResolversTypes['WrappedDomain']>, ParentType, ContextType, RequireFields<QuerywrappedDomainArgs, 'id' | 'subgraphError'>>;
  wrappedDomains?: Resolver<Array<ResolversTypes['WrappedDomain']>, ParentType, ContextType, RequireFields<QuerywrappedDomainsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  resolver?: Resolver<Maybe<ResolversTypes['Resolver']>, ParentType, ContextType, RequireFields<QueryresolverArgs, 'id' | 'subgraphError'>>;
  resolvers?: Resolver<Array<ResolversTypes['Resolver']>, ParentType, ContextType, RequireFields<QueryresolversArgs, 'skip' | 'first' | 'subgraphError'>>;
  addrChanged?: Resolver<Maybe<ResolversTypes['AddrChanged']>, ParentType, ContextType, RequireFields<QueryaddrChangedArgs, 'id' | 'subgraphError'>>;
  addrChangeds?: Resolver<Array<ResolversTypes['AddrChanged']>, ParentType, ContextType, RequireFields<QueryaddrChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  multicoinAddrChanged?: Resolver<Maybe<ResolversTypes['MulticoinAddrChanged']>, ParentType, ContextType, RequireFields<QuerymulticoinAddrChangedArgs, 'id' | 'subgraphError'>>;
  multicoinAddrChangeds?: Resolver<Array<ResolversTypes['MulticoinAddrChanged']>, ParentType, ContextType, RequireFields<QuerymulticoinAddrChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameChanged?: Resolver<Maybe<ResolversTypes['NameChanged']>, ParentType, ContextType, RequireFields<QuerynameChangedArgs, 'id' | 'subgraphError'>>;
  nameChangeds?: Resolver<Array<ResolversTypes['NameChanged']>, ParentType, ContextType, RequireFields<QuerynameChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  abiChanged?: Resolver<Maybe<ResolversTypes['AbiChanged']>, ParentType, ContextType, RequireFields<QueryabiChangedArgs, 'id' | 'subgraphError'>>;
  abiChangeds?: Resolver<Array<ResolversTypes['AbiChanged']>, ParentType, ContextType, RequireFields<QueryabiChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pubkeyChanged?: Resolver<Maybe<ResolversTypes['PubkeyChanged']>, ParentType, ContextType, RequireFields<QuerypubkeyChangedArgs, 'id' | 'subgraphError'>>;
  pubkeyChangeds?: Resolver<Array<ResolversTypes['PubkeyChanged']>, ParentType, ContextType, RequireFields<QuerypubkeyChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  textChanged?: Resolver<Maybe<ResolversTypes['TextChanged']>, ParentType, ContextType, RequireFields<QuerytextChangedArgs, 'id' | 'subgraphError'>>;
  textChangeds?: Resolver<Array<ResolversTypes['TextChanged']>, ParentType, ContextType, RequireFields<QuerytextChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  contenthashChanged?: Resolver<Maybe<ResolversTypes['ContenthashChanged']>, ParentType, ContextType, RequireFields<QuerycontenthashChangedArgs, 'id' | 'subgraphError'>>;
  contenthashChangeds?: Resolver<Array<ResolversTypes['ContenthashChanged']>, ParentType, ContextType, RequireFields<QuerycontenthashChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  interfaceChanged?: Resolver<Maybe<ResolversTypes['InterfaceChanged']>, ParentType, ContextType, RequireFields<QueryinterfaceChangedArgs, 'id' | 'subgraphError'>>;
  interfaceChangeds?: Resolver<Array<ResolversTypes['InterfaceChanged']>, ParentType, ContextType, RequireFields<QueryinterfaceChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  authorisationChanged?: Resolver<Maybe<ResolversTypes['AuthorisationChanged']>, ParentType, ContextType, RequireFields<QueryauthorisationChangedArgs, 'id' | 'subgraphError'>>;
  authorisationChangeds?: Resolver<Array<ResolversTypes['AuthorisationChanged']>, ParentType, ContextType, RequireFields<QueryauthorisationChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  versionChanged?: Resolver<Maybe<ResolversTypes['VersionChanged']>, ParentType, ContextType, RequireFields<QueryversionChangedArgs, 'id' | 'subgraphError'>>;
  versionChangeds?: Resolver<Array<ResolversTypes['VersionChanged']>, ParentType, ContextType, RequireFields<QueryversionChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  domainEvent?: Resolver<Maybe<ResolversTypes['DomainEvent']>, ParentType, ContextType, RequireFields<QuerydomainEventArgs, 'id' | 'subgraphError'>>;
  domainEvents?: Resolver<Array<ResolversTypes['DomainEvent']>, ParentType, ContextType, RequireFields<QuerydomainEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  registrationEvent?: Resolver<Maybe<ResolversTypes['RegistrationEvent']>, ParentType, ContextType, RequireFields<QueryregistrationEventArgs, 'id' | 'subgraphError'>>;
  registrationEvents?: Resolver<Array<ResolversTypes['RegistrationEvent']>, ParentType, ContextType, RequireFields<QueryregistrationEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  resolverEvent?: Resolver<Maybe<ResolversTypes['ResolverEvent']>, ParentType, ContextType, RequireFields<QueryresolverEventArgs, 'id' | 'subgraphError'>>;
  resolverEvents?: Resolver<Array<ResolversTypes['ResolverEvent']>, ParentType, ContextType, RequireFields<QueryresolverEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type RegistrationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Registration'] = ResolversParentTypes['Registration']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  registrationDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  expiryDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  cost?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  registrant?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  labelName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['RegistrationEvent']>, ParentType, ContextType, RequireFields<RegistrationeventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RegistrationEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RegistrationEvent'] = ResolversParentTypes['RegistrationEvent']> = ResolversObject<{
  __resolveType: TypeResolveFn<'NameRegistered' | 'NameRenewed' | 'NameTransferred', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  registration?: Resolver<ResolversTypes['Registration'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
}>;

export type ResolverResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Resolver'] = ResolversParentTypes['Resolver']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['Domain']>, ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  addr?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  contentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  texts?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  coinTypes?: Resolver<Maybe<Array<ResolversTypes['BigInt']>>, ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['ResolverEvent']>, ParentType, ContextType, RequireFields<ResolvereventsArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResolverEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ResolverEvent'] = ResolversParentTypes['ResolverEvent']> = ResolversObject<{
  __resolveType: TypeResolveFn<'AbiChanged' | 'AddrChanged' | 'AuthorisationChanged' | 'ContenthashChanged' | 'InterfaceChanged' | 'MulticoinAddrChanged' | 'NameChanged' | 'PubkeyChanged' | 'TextChanged' | 'VersionChanged', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  domain?: SubscriptionResolver<Maybe<ResolversTypes['Domain']>, "domain", ParentType, ContextType, RequireFields<SubscriptiondomainArgs, 'id' | 'subgraphError'>>;
  domains?: SubscriptionResolver<Array<ResolversTypes['Domain']>, "domains", ParentType, ContextType, RequireFields<SubscriptiondomainsArgs, 'skip' | 'first' | 'subgraphError'>>;
  transfer?: SubscriptionResolver<Maybe<ResolversTypes['Transfer']>, "transfer", ParentType, ContextType, RequireFields<SubscriptiontransferArgs, 'id' | 'subgraphError'>>;
  transfers?: SubscriptionResolver<Array<ResolversTypes['Transfer']>, "transfers", ParentType, ContextType, RequireFields<SubscriptiontransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  newOwner?: SubscriptionResolver<Maybe<ResolversTypes['NewOwner']>, "newOwner", ParentType, ContextType, RequireFields<SubscriptionnewOwnerArgs, 'id' | 'subgraphError'>>;
  newOwners?: SubscriptionResolver<Array<ResolversTypes['NewOwner']>, "newOwners", ParentType, ContextType, RequireFields<SubscriptionnewOwnersArgs, 'skip' | 'first' | 'subgraphError'>>;
  newResolver?: SubscriptionResolver<Maybe<ResolversTypes['NewResolver']>, "newResolver", ParentType, ContextType, RequireFields<SubscriptionnewResolverArgs, 'id' | 'subgraphError'>>;
  newResolvers?: SubscriptionResolver<Array<ResolversTypes['NewResolver']>, "newResolvers", ParentType, ContextType, RequireFields<SubscriptionnewResolversArgs, 'skip' | 'first' | 'subgraphError'>>;
  newTTL?: SubscriptionResolver<Maybe<ResolversTypes['NewTTL']>, "newTTL", ParentType, ContextType, RequireFields<SubscriptionnewTTLArgs, 'id' | 'subgraphError'>>;
  newTTLs?: SubscriptionResolver<Array<ResolversTypes['NewTTL']>, "newTTLs", ParentType, ContextType, RequireFields<SubscriptionnewTTLsArgs, 'skip' | 'first' | 'subgraphError'>>;
  wrappedTransfer?: SubscriptionResolver<Maybe<ResolversTypes['WrappedTransfer']>, "wrappedTransfer", ParentType, ContextType, RequireFields<SubscriptionwrappedTransferArgs, 'id' | 'subgraphError'>>;
  wrappedTransfers?: SubscriptionResolver<Array<ResolversTypes['WrappedTransfer']>, "wrappedTransfers", ParentType, ContextType, RequireFields<SubscriptionwrappedTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameWrapped?: SubscriptionResolver<Maybe<ResolversTypes['NameWrapped']>, "nameWrapped", ParentType, ContextType, RequireFields<SubscriptionnameWrappedArgs, 'id' | 'subgraphError'>>;
  nameWrappeds?: SubscriptionResolver<Array<ResolversTypes['NameWrapped']>, "nameWrappeds", ParentType, ContextType, RequireFields<SubscriptionnameWrappedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameUnwrapped?: SubscriptionResolver<Maybe<ResolversTypes['NameUnwrapped']>, "nameUnwrapped", ParentType, ContextType, RequireFields<SubscriptionnameUnwrappedArgs, 'id' | 'subgraphError'>>;
  nameUnwrappeds?: SubscriptionResolver<Array<ResolversTypes['NameUnwrapped']>, "nameUnwrappeds", ParentType, ContextType, RequireFields<SubscriptionnameUnwrappedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  fusesSet?: SubscriptionResolver<Maybe<ResolversTypes['FusesSet']>, "fusesSet", ParentType, ContextType, RequireFields<SubscriptionfusesSetArgs, 'id' | 'subgraphError'>>;
  fusesSets?: SubscriptionResolver<Array<ResolversTypes['FusesSet']>, "fusesSets", ParentType, ContextType, RequireFields<SubscriptionfusesSetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  expiryExtended?: SubscriptionResolver<Maybe<ResolversTypes['ExpiryExtended']>, "expiryExtended", ParentType, ContextType, RequireFields<SubscriptionexpiryExtendedArgs, 'id' | 'subgraphError'>>;
  expiryExtendeds?: SubscriptionResolver<Array<ResolversTypes['ExpiryExtended']>, "expiryExtendeds", ParentType, ContextType, RequireFields<SubscriptionexpiryExtendedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  registration?: SubscriptionResolver<Maybe<ResolversTypes['Registration']>, "registration", ParentType, ContextType, RequireFields<SubscriptionregistrationArgs, 'id' | 'subgraphError'>>;
  registrations?: SubscriptionResolver<Array<ResolversTypes['Registration']>, "registrations", ParentType, ContextType, RequireFields<SubscriptionregistrationsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameRegistered?: SubscriptionResolver<Maybe<ResolversTypes['NameRegistered']>, "nameRegistered", ParentType, ContextType, RequireFields<SubscriptionnameRegisteredArgs, 'id' | 'subgraphError'>>;
  nameRegistereds?: SubscriptionResolver<Array<ResolversTypes['NameRegistered']>, "nameRegistereds", ParentType, ContextType, RequireFields<SubscriptionnameRegisteredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameRenewed?: SubscriptionResolver<Maybe<ResolversTypes['NameRenewed']>, "nameRenewed", ParentType, ContextType, RequireFields<SubscriptionnameRenewedArgs, 'id' | 'subgraphError'>>;
  nameReneweds?: SubscriptionResolver<Array<ResolversTypes['NameRenewed']>, "nameReneweds", ParentType, ContextType, RequireFields<SubscriptionnameRenewedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameTransferred?: SubscriptionResolver<Maybe<ResolversTypes['NameTransferred']>, "nameTransferred", ParentType, ContextType, RequireFields<SubscriptionnameTransferredArgs, 'id' | 'subgraphError'>>;
  nameTransferreds?: SubscriptionResolver<Array<ResolversTypes['NameTransferred']>, "nameTransferreds", ParentType, ContextType, RequireFields<SubscriptionnameTransferredsArgs, 'skip' | 'first' | 'subgraphError'>>;
  wrappedDomain?: SubscriptionResolver<Maybe<ResolversTypes['WrappedDomain']>, "wrappedDomain", ParentType, ContextType, RequireFields<SubscriptionwrappedDomainArgs, 'id' | 'subgraphError'>>;
  wrappedDomains?: SubscriptionResolver<Array<ResolversTypes['WrappedDomain']>, "wrappedDomains", ParentType, ContextType, RequireFields<SubscriptionwrappedDomainsArgs, 'skip' | 'first' | 'subgraphError'>>;
  account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionaccountArgs, 'id' | 'subgraphError'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionaccountsArgs, 'skip' | 'first' | 'subgraphError'>>;
  resolver?: SubscriptionResolver<Maybe<ResolversTypes['Resolver']>, "resolver", ParentType, ContextType, RequireFields<SubscriptionresolverArgs, 'id' | 'subgraphError'>>;
  resolvers?: SubscriptionResolver<Array<ResolversTypes['Resolver']>, "resolvers", ParentType, ContextType, RequireFields<SubscriptionresolversArgs, 'skip' | 'first' | 'subgraphError'>>;
  addrChanged?: SubscriptionResolver<Maybe<ResolversTypes['AddrChanged']>, "addrChanged", ParentType, ContextType, RequireFields<SubscriptionaddrChangedArgs, 'id' | 'subgraphError'>>;
  addrChangeds?: SubscriptionResolver<Array<ResolversTypes['AddrChanged']>, "addrChangeds", ParentType, ContextType, RequireFields<SubscriptionaddrChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  multicoinAddrChanged?: SubscriptionResolver<Maybe<ResolversTypes['MulticoinAddrChanged']>, "multicoinAddrChanged", ParentType, ContextType, RequireFields<SubscriptionmulticoinAddrChangedArgs, 'id' | 'subgraphError'>>;
  multicoinAddrChangeds?: SubscriptionResolver<Array<ResolversTypes['MulticoinAddrChanged']>, "multicoinAddrChangeds", ParentType, ContextType, RequireFields<SubscriptionmulticoinAddrChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  nameChanged?: SubscriptionResolver<Maybe<ResolversTypes['NameChanged']>, "nameChanged", ParentType, ContextType, RequireFields<SubscriptionnameChangedArgs, 'id' | 'subgraphError'>>;
  nameChangeds?: SubscriptionResolver<Array<ResolversTypes['NameChanged']>, "nameChangeds", ParentType, ContextType, RequireFields<SubscriptionnameChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  abiChanged?: SubscriptionResolver<Maybe<ResolversTypes['AbiChanged']>, "abiChanged", ParentType, ContextType, RequireFields<SubscriptionabiChangedArgs, 'id' | 'subgraphError'>>;
  abiChangeds?: SubscriptionResolver<Array<ResolversTypes['AbiChanged']>, "abiChangeds", ParentType, ContextType, RequireFields<SubscriptionabiChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  pubkeyChanged?: SubscriptionResolver<Maybe<ResolversTypes['PubkeyChanged']>, "pubkeyChanged", ParentType, ContextType, RequireFields<SubscriptionpubkeyChangedArgs, 'id' | 'subgraphError'>>;
  pubkeyChangeds?: SubscriptionResolver<Array<ResolversTypes['PubkeyChanged']>, "pubkeyChangeds", ParentType, ContextType, RequireFields<SubscriptionpubkeyChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  textChanged?: SubscriptionResolver<Maybe<ResolversTypes['TextChanged']>, "textChanged", ParentType, ContextType, RequireFields<SubscriptiontextChangedArgs, 'id' | 'subgraphError'>>;
  textChangeds?: SubscriptionResolver<Array<ResolversTypes['TextChanged']>, "textChangeds", ParentType, ContextType, RequireFields<SubscriptiontextChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  contenthashChanged?: SubscriptionResolver<Maybe<ResolversTypes['ContenthashChanged']>, "contenthashChanged", ParentType, ContextType, RequireFields<SubscriptioncontenthashChangedArgs, 'id' | 'subgraphError'>>;
  contenthashChangeds?: SubscriptionResolver<Array<ResolversTypes['ContenthashChanged']>, "contenthashChangeds", ParentType, ContextType, RequireFields<SubscriptioncontenthashChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  interfaceChanged?: SubscriptionResolver<Maybe<ResolversTypes['InterfaceChanged']>, "interfaceChanged", ParentType, ContextType, RequireFields<SubscriptioninterfaceChangedArgs, 'id' | 'subgraphError'>>;
  interfaceChangeds?: SubscriptionResolver<Array<ResolversTypes['InterfaceChanged']>, "interfaceChangeds", ParentType, ContextType, RequireFields<SubscriptioninterfaceChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  authorisationChanged?: SubscriptionResolver<Maybe<ResolversTypes['AuthorisationChanged']>, "authorisationChanged", ParentType, ContextType, RequireFields<SubscriptionauthorisationChangedArgs, 'id' | 'subgraphError'>>;
  authorisationChangeds?: SubscriptionResolver<Array<ResolversTypes['AuthorisationChanged']>, "authorisationChangeds", ParentType, ContextType, RequireFields<SubscriptionauthorisationChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  versionChanged?: SubscriptionResolver<Maybe<ResolversTypes['VersionChanged']>, "versionChanged", ParentType, ContextType, RequireFields<SubscriptionversionChangedArgs, 'id' | 'subgraphError'>>;
  versionChangeds?: SubscriptionResolver<Array<ResolversTypes['VersionChanged']>, "versionChangeds", ParentType, ContextType, RequireFields<SubscriptionversionChangedsArgs, 'skip' | 'first' | 'subgraphError'>>;
  domainEvent?: SubscriptionResolver<Maybe<ResolversTypes['DomainEvent']>, "domainEvent", ParentType, ContextType, RequireFields<SubscriptiondomainEventArgs, 'id' | 'subgraphError'>>;
  domainEvents?: SubscriptionResolver<Array<ResolversTypes['DomainEvent']>, "domainEvents", ParentType, ContextType, RequireFields<SubscriptiondomainEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  registrationEvent?: SubscriptionResolver<Maybe<ResolversTypes['RegistrationEvent']>, "registrationEvent", ParentType, ContextType, RequireFields<SubscriptionregistrationEventArgs, 'id' | 'subgraphError'>>;
  registrationEvents?: SubscriptionResolver<Array<ResolversTypes['RegistrationEvent']>, "registrationEvents", ParentType, ContextType, RequireFields<SubscriptionregistrationEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  resolverEvent?: SubscriptionResolver<Maybe<ResolversTypes['ResolverEvent']>, "resolverEvent", ParentType, ContextType, RequireFields<SubscriptionresolverEventArgs, 'id' | 'subgraphError'>>;
  resolverEvents?: SubscriptionResolver<Array<ResolversTypes['ResolverEvent']>, "resolverEvents", ParentType, ContextType, RequireFields<SubscriptionresolverEventsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type TextChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TextChanged'] = ResolversParentTypes['TextChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type TransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Transfer'] = ResolversParentTypes['Transfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VersionChangedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['VersionChanged'] = ResolversParentTypes['VersionChanged']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  resolver?: Resolver<ResolversTypes['Resolver'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WrappedDomainResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WrappedDomain'] = ResolversParentTypes['WrappedDomain']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  expiryDate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  fuses?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WrappedTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['WrappedTransfer'] = ResolversParentTypes['WrappedTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  domain?: Resolver<ResolversTypes['Domain'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  transactionID?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  parentHash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  AbiChanged?: AbiChangedResolvers<ContextType>;
  Account?: AccountResolvers<ContextType>;
  AddrChanged?: AddrChangedResolvers<ContextType>;
  AuthorisationChanged?: AuthorisationChangedResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  ContenthashChanged?: ContenthashChangedResolvers<ContextType>;
  Domain?: DomainResolvers<ContextType>;
  DomainEvent?: DomainEventResolvers<ContextType>;
  ExpiryExtended?: ExpiryExtendedResolvers<ContextType>;
  FusesSet?: FusesSetResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  InterfaceChanged?: InterfaceChangedResolvers<ContextType>;
  MulticoinAddrChanged?: MulticoinAddrChangedResolvers<ContextType>;
  NameChanged?: NameChangedResolvers<ContextType>;
  NameRegistered?: NameRegisteredResolvers<ContextType>;
  NameRenewed?: NameRenewedResolvers<ContextType>;
  NameTransferred?: NameTransferredResolvers<ContextType>;
  NameUnwrapped?: NameUnwrappedResolvers<ContextType>;
  NameWrapped?: NameWrappedResolvers<ContextType>;
  NewOwner?: NewOwnerResolvers<ContextType>;
  NewResolver?: NewResolverResolvers<ContextType>;
  NewTTL?: NewTTLResolvers<ContextType>;
  PubkeyChanged?: PubkeyChangedResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Registration?: RegistrationResolvers<ContextType>;
  RegistrationEvent?: RegistrationEventResolvers<ContextType>;
  Resolver?: ResolverResolvers<ContextType>;
  ResolverEvent?: ResolverEventResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  TextChanged?: TextChangedResolvers<ContextType>;
  Timestamp?: GraphQLScalarType;
  Transfer?: TransferResolvers<ContextType>;
  VersionChanged?: VersionChangedResolvers<ContextType>;
  WrappedDomain?: WrappedDomainResolvers<ContextType>;
  WrappedTransfer?: WrappedTransferResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = EnsTypes.Context & BaseMeshContext;


import { fileURLToPath } from '@graphql-mesh/utils';
const baseDir = pathModule.join(pathModule.dirname(fileURLToPath(import.meta.url)), '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/ens/introspectionSchema":
      return import("./sources/ens/introspectionSchema") as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const ensTransforms = [];
const additionalTypeDefs = [] as any[];
const ensHandler = new GraphqlHandler({
              name: "ens",
              config: {"endpoint":"https://gateway.thegraph.com/api/d7aab3406f8ec17e92cb75641159c3f3/subgraphs/id/5XqPmWe6gjyrJtFn9cLy237i4cWw2j9HcUJEXsP5qGtH"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("ens"),
              logger: logger.child("ens"),
              importFn,
            });
ensTransforms[0] = new AutoPaginationTransform({
                  apiName: "ens",
                  config: null,
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
sources[0] = {
          name: 'ens',
          handler: ensHandler,
          transforms: ensTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: GetDomainsForAddressDocument,
        get rawSDL() {
          return printWithCache(GetDomainsForAddressDocument);
        },
        location: 'GetDomainsForAddressDocument.graphql'
      },{
        document: GetDomainsDocument,
        get rawSDL() {
          return printWithCache(GetDomainsDocument);
        },
        location: 'GetDomainsDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type getDomainsForAddressQueryVariables = Exact<{
  address: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type getDomainsForAddressQuery = { account?: Maybe<{ registrations?: Maybe<Array<{ domain: Pick<Domain, 'name'> }>> }> };

export type getDomainsQueryVariables = Exact<{
  names: Array<Scalars['String']> | Scalars['String'];
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type getDomainsQuery = { domains: Array<(
    Pick<Domain, 'name'>
    & { registration?: Maybe<(
      Pick<Registration, 'id' | 'expiryDate' | 'registrationDate'>
      & { events: Array<Pick<NameRenewed, 'blockNumber'> | {}> }
    )> }
  )> };


export const getDomainsForAddressDocument = gql`
    query getDomainsForAddress($address: ID!, $first: Int = 1000, $skip: Int = 0) {
  account(id: $address) {
    registrations(
      first: $first
      skip: $skip
      orderBy: expiryDate
      orderDirection: asc
    ) {
      domain {
        name
      }
    }
  }
}
    ` as unknown as DocumentNode<getDomainsForAddressQuery, getDomainsForAddressQueryVariables>;
export const getDomainsDocument = gql`
    query getDomains($names: [String!]!, $first: Int = 1000, $skip: Int = 0) {
  domains(first: $first, skip: $skip, where: {name_in: $names}) {
    name
    registration {
      id
      expiryDate
      registrationDate
      events(first: 1000) {
        ... on NameRenewed {
          blockNumber
        }
      }
    }
  }
}
    ` as unknown as DocumentNode<getDomainsQuery, getDomainsQueryVariables>;



export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    getDomainsForAddress(variables: getDomainsForAddressQueryVariables, options?: C): Promise<getDomainsForAddressQuery> {
      return requester<getDomainsForAddressQuery, getDomainsForAddressQueryVariables>(getDomainsForAddressDocument, variables, options) as Promise<getDomainsForAddressQuery>;
    },
    getDomains(variables: getDomainsQueryVariables, options?: C): Promise<getDomainsQuery> {
      return requester<getDomainsQuery, getDomainsQueryVariables>(getDomainsDocument, variables, options) as Promise<getDomainsQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;