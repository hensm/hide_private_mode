"use strict";

import indexedDB from "fake-indexeddb";
import FDBCursor from "fake-indexeddb/lib/FDBCursor";
import FDBCursorWithValue from "fake-indexeddb/lib/FDBCursorWithValue";
import FDBDatabase from "fake-indexeddb/lib/FDBDatabase";
import FDBFactory from "fake-indexeddb/lib/FDBFactory";
import FDBIndex from "fake-indexeddb/lib/FDBIndex";
import FDBKeyRange from "fake-indexeddb/lib/FDBKeyRange";
import FDBObjectStore from "fake-indexeddb/lib/FDBObjectStore";
import FDBOpenDBRequest from "fake-indexeddb/lib/FDBOpenDBRequest";
import FDBRequest from "fake-indexeddb/lib/FDBRequest";
import FDBTransaction from "fake-indexeddb/lib/FDBTransaction";
import FDBVersionChangeEvent from "fake-indexeddb/lib/FDBVersionChangeEvent";


Reflect.defineProperty(window, "indexedDB", {
    get () {
        return indexedDB;
    }
});

window.IDBCursor = FDBCursor;
window.IDBCursorWithValue = FDBCursorWithValue;
window.IDBDatabase = FDBDatabase;
window.IDBFactory = FDBFactory;
window.IDBIndex = FDBIndex;
window.IDBKeyRange = FDBKeyRange;
window.IDBObjectStore = FDBObjectStore;
window.IDBOpenDBRequest = FDBOpenDBRequest;
window.IDBRequest = FDBRequest;
window.IDBTransaction = FDBTransaction;
window.IDBVersionChangeEvent = FDBVersionChangeEvent;
