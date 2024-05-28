/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
<<<<<<<< HEAD:nifi-commons/nifi-security-ssl/src/main/java/org/apache/nifi/security/ssl/KeyManagerFactoryBuilder.java
package org.apache.nifi.security.ssl;

import javax.net.ssl.KeyManagerFactory;

/**
 * Builder interface for instances of java.security.ssl.KeyManagerFactory
 */
public interface KeyManagerFactoryBuilder {
    /**
     * Build Key Manager Factory using configured properties
     *
     * @return Key Manager Factory
     */
    KeyManagerFactory build();
========

package org.apache.nifi.c2.util;

public abstract class Preconditions {

    private Preconditions() {
    }

    public static void requires(boolean criterion, String exceptionMessage) {
        if (!criterion) {
            throw new IllegalArgumentException(exceptionMessage);
        }
    }
>>>>>>>> b6d3a4987a (Trigger CI pipeline):c2/c2-client-bundle/c2-client-base/src/main/java/org/apache/nifi/c2/util/Preconditions.java
}
