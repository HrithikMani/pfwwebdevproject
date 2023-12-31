PGDMP                       {         	   pfwwebdev    16.0    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398 	   pfwwebdev    DATABASE     �   CREATE DATABASE pfwwebdev WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
    DROP DATABASE pfwwebdev;
                postgres    false            �            1259    16419    jobs    TABLE     -  CREATE TABLE public.jobs (
    job_id integer NOT NULL,
    job_title character varying(255) NOT NULL,
    job_description character varying(500),
    skills character varying(255),
    pic character varying(150),
    posted_date date,
    salary numeric(10,2),
    location character varying(255)
);
    DROP TABLE public.jobs;
       public         heap    postgres    false            �            1259    16418    jobs_job_id_seq    SEQUENCE     �   CREATE SEQUENCE public.jobs_job_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.jobs_job_id_seq;
       public          postgres    false    218            �           0    0    jobs_job_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.jobs_job_id_seq OWNED BY public.jobs.job_id;
          public          postgres    false    217            �            1259    16408    users    TABLE     &  CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(50),
    email character varying(100),
    role integer,
    password character varying(255),
    firstname character varying(255),
    lastname character varying(255),
    profilepic character varying(255)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16411    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    215            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    216            V           2604    16422    jobs job_id    DEFAULT     j   ALTER TABLE ONLY public.jobs ALTER COLUMN job_id SET DEFAULT nextval('public.jobs_job_id_seq'::regclass);
 :   ALTER TABLE public.jobs ALTER COLUMN job_id DROP DEFAULT;
       public          postgres    false    218    217    218            U           2604    16417    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215            �          0    16419    jobs 
   TABLE DATA           n   COPY public.jobs (job_id, job_title, job_description, skills, pic, posted_date, salary, location) FROM stdin;
    public          postgres    false    218          �          0    16408    users 
   TABLE DATA           e   COPY public.users (id, username, email, role, password, firstname, lastname, profilepic) FROM stdin;
    public          postgres    false    215   �       �           0    0    jobs_job_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.jobs_job_id_seq', 20, true);
          public          postgres    false    217            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 15, true);
          public          postgres    false    216            Z           2606    16426    jobs jobs_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_pkey PRIMARY KEY (job_id);
 8   ALTER TABLE ONLY public.jobs DROP CONSTRAINT jobs_pkey;
       public            postgres    false    218            X           2606    16414    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215            �   �  x�}T�N�0}v�b> e���KZX ؂�/ƙ6�&���@��w�4@ʊJ�bgfΙ3g�el����[��ZI�h�[���j�ɍ���^j��%oy
�����BXi<{�a��d�MF�}v<���x�r�70M�	�q�a!$*/�gSū�߀�URy�ƢBצ�7(B�C���ƗZ��;�k.J"
Wȭ�����i����G���+E��y�h������D
�t����U*b�c?S���qFͯыr���3t�d?��WmהYKE][�e�\�U�yͩw���7$�.���%��h,�N!�N�]��$; ��͵��T}�1	�Rz"xmx�6�"(����k!y�XH�~�i`�C��V�R�0O�CvF�*���8`��.�<�&�dI���M`E�B7���%Β���&a�1�zXU����(�җ`�.�G+�1x�������V
z�u��+�­���#���+����$;f疛R��v�U�K�F��R[h���q`��k���[��N�Զ����J�F����J$n+�ToTݒ2��h�q�F���f�D4ZPJ)͎>߮�E2�;�8~8�k, �-�+�|���ˏ/�/�nV%x�3ew�4�F�6+��\���d�����^�$� �Ω�      �   �   x����� ���S�	��<6iz��^�4B,j��>~EmR��f��,��,[s̨M�V���A���"�aV�h����pL&Q��$�bڷ5A��i�~�����C7�i.�)U]�"��J}wz��B���� .`��7�ީ/�c�*�tn��!�僡Q(�p���j�M���;�~?�����+%����{     