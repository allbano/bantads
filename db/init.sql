-- Script para criar um slot de replicação física
DO
$$
BEGIN
    IF NOT EXISTS (
        SELECT FROM pg_replication_slots
        WHERE slot_name = 'slot_replication_master'
    ) THEN
        PERFORM pg_create_physical_replication_slot('slot_replication_master');
    END IF;
END
$$;

-- Criar o papel userbackup com permissões de replicação
DO
$$
BEGIN
    IF NOT EXISTS (
        SELECT FROM pg_roles
        WHERE rolname = 'userbackup'
    ) THEN
        CREATE USER userbackup WITH LOGIN ENCRYPTED PASSWORD 'testing' NOSUPERUSER NOCREATEDB NOCREATEROLE INHERIT REPLICATION CONNECTION LIMIT -1;
    END IF;
END
$$;
